const { Playlist } = require('../models');
const db = require('../models');
const { UserRepo, PlayListRepository } = require('../repositories');

const { cloudinary } = require('../services/cloudinary');
const { getPublicId } = require('../utils/cloudinaryUtils');

function getPlaylists(ListOfPlaylists) {
    const playlists = ListOfPlaylists.map((playlist) => {
        return {
            id: playlist._id,
            name: playlist.name,
            description: playlist.description,
            thumbnail: playlist.thumbnail,
            user: playlist.user,
            publicAccessible: playlist.publicAccessible,
        };
    });
    return playlists;
}

async function createPlaylist(req, res, next) {
    try {
        const { _id } = req.user;
        const findUser = await UserRepo.findOne({ _id });
        const playlistData = {
            name: req.body.name,
            description: req.body.description,
            thumbnail: req.files.thumbnail[0].path,
            publicAccessible: req.body.publicAccessible,
            user: findUser.data._id,
        };

        if (findUser.error) {
            return res.status(400).send({ error: 'The user has not been found, please try again' });
        }
        
        if (findUser.data) {
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
                console.log(playlistData);
            }
        
        // return all the playlists from this user
        const playlists = await db.Playlist.find({ user: findUser.data._id }).exec();
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

module.exports = {
    createPlaylist,
}