const { Playlist } = require('../models');
const db = require('../models');
const { UserRepo, PlayListRepository } = require('../repositories');
const { DEFAULT_PLAYLIST_THUMBNAIL } = require('../utils/defaults');

const { cloudinary } = require('../services/cloudinary');
const { getPublicId } = require('../utils/cloudinaryUtils');

function getPlaylists(ListOfPlaylists) {
    const playlists = ListOfPlaylists.map((playlist) => {
        return {
            id: playlist.user,
            name: playlist.name,
            description: playlist.description,
            thumbnail: playlist.thumbnail,
            publicAccessible: playlist.publicAccessible,
            followedBy: playlist.follows,
        };
    });
    return playlists;
}

async function createPlaylist(req, res, next) {
    try {
        const _id = req.user._id;
        const user = await UserRepo.findOne({ _id: _id });
        // set default image if req.files.thumbnail is undefined
        const thumbnail = req.files.thumbnail ? req.files.thumbnail[0].path : DEFAULT_PLAYLIST_THUMBNAIL;
        const playlistData = {
            user: _id,
            name: req.body.name,
            description: req.body.description, 
            thumbnail: thumbnail,
            publicAccessible: req.body.publicAccessible,
        };

        if (user.error) {
            return res.status(400).send({ error: 'The user has not been found, please try again' });
        }
        
        if (user.data) {
            const { name, description, publicAccessible, user, thumbnail } = playlistData;
            const thumbnailPicture = await cloudinary.uploader.upload(thumbnail,
                {
                    resource_type: 'image',
                    folder: 'playlists',
                });
                playlistData.user = user;
                playlistData.name = name;
                playlistData.description = description;
                playlistData.thumbnail = thumbnailPicture.secure_url;
                playlistData.publicAccessible = publicAccessible;
                
                await db.Playlist.create(playlistData);
            }
        
        // return all the playlists from this user
        const playlists = await db.Playlist.find({ user: _id }).exec();
        console.log(playlists);
        const playlistsList = getPlaylists(playlists);
        return res.status(200).send({
            message: "Playlist created successfully",
            playlists: playlistsList
        });
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
      next(error);
    }
}

async function getAllPlaylists(req, res, next) {
    try {
        const _id = req.user._id;
        const user = await UserRepo.findOne({ _id });
        if (user.error) {
            return res.status(400).send({ error: 'The user has not been found, please try again' });
        }
        if (user.data) {
            const playlistsFound = await db.Playlist.aggregate([
                {
                    $match: {
                        $or: [{ publicAccessible: true }, { user: _id }]
                    },
                },
                {
                    $project: {
                        name: 1,
                        description: 1,
                        thumbnail: 1,
                        publicAccessible: 1,
                        follows: { $size: { $ifNull: ["$follows", []] } },
                        isFollowed: { $setIsSubset: [[_id], "$followedBy"] },
                    },
                },
                {
                    $sort: {
                        createdAt: -1,
                    },
                }
            ]).exec();
            const playlistsList = getPlaylists(playlistsFound);
            return res.status(200).send({
                message: "Playlists found",
                playlists: playlistsList
            });
        }
        next();
    } catch (error) {
        res.status(500).send({
            error: error.message,
        });
        next(error);
    }
}

async function followPlaylist(req, res, next) {
    try {
        const _id = req.user._id;
        const user = await UserRepo.findOne({ _id });
        if (user.error) {
            return res.status(400).send({ error: 'The user has not been found, please try again' });
        }
        if (user.data) {
            const playlistId = req.params['id'];
            const followedPlaylists = await db.Playlist.findOneAndUpdate({ playlistId },
                [
                    {
                        $set: {
                            followedBy: { 
                                $cond: {
                                    if: { $in: [_id, "$followedBy"] },
                                    then: { $setDifference: ["$followedBy", [_id]] },
                                    else: { $concatArrays: ["$followedBy", [_id]] }
                                }
                            }
                        }
                    }
                ],
                { new: true }
            ).exec();
            const followed = followedPlaylists.followedBy.includes(_id) ? true : false;
            res.status(200).send({
                success: followed
                ? 'You have successfully followed the playlist'
                : 'You have successfully unfollowed the playlist',
                data: { _id: followedPlaylists._id, followed: followed},
            });
            return;
        }
    next();
    } catch (error) {
        res.status(500).send({
            error: error.message,
        });
        next(error);
    }
}

module.exports = {
    createPlaylist,
    getAllPlaylists,
    followPlaylist,
}