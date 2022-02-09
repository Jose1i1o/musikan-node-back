const db = require('../models');
const {
  UserRepo,
  PlayListRepository,
  PlaylistRepo,
} = require('../repositories');

const mongoose = require('mongoose');

const { getPublicId } = require('../utils/cloudinaryUtils');
const { cloudinary } = require('../services/cloudinary');

async function createPlaylist(req, res, next) {
  try {
    const _id = req.headers._id;

    const thumbnail = req.file.path;

    const playlistData = {
      userId: _id,
      name: req.body.name,
      description: req.body.description,
      publicAccessible: req.body.publicAccessible,
    };

    const thumbnailPicture = await cloudinary.uploader.upload(thumbnail, {
      resource_type: 'image',
      folder: 'playlists',
    });
    playlistData.thumbnail = thumbnailPicture.secure_url;


    await db.Playlist.create(playlistData);
    
    if (playlistData) {
      const playlists = await db.Playlist.find({ userId: _id }, {
        name: 1,
        description: 1,
        publicAccessible: 1,
        thumbnail: 1,
        followedBy: 1,
      }).exec();

      return res.status(201).send({
        success: 'Playlist created successfully',
        data: playlists,
      });
    } else {
      return res
        .status(400)
        .send({ error: 'The playlist has not been created, please try again' });
      }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function followPlaylist(req, res, next) {
  try {
    const _id = req.headers._id;
    const user = await UserRepo.findOne({ userId: _id });
    if (user.error) {
      return res
        .status(400)
        .send({ error: 'The user has not been found, please try again' });
    }
    if (user.data) {
      const playlistId = req.params['id'];
      const followedPlaylists = await db.Playlist.findOneAndUpdate(
        { _id: playlistId },
        [
          {
            $set: {
              followedBy: {
                $cond: {
                  if: { $in: [_id, '$followedBy'] },
                  then: { $setDifference: ['$followedBy', [_id]] },
                  else: { $concatArrays: ['$followedBy', [_id]] },
                },
              },
            },
          },
        ],
        { new: true }
      ).exec();
      if (followedPlaylists) {
        const followed = followedPlaylists.followedBy.includes(_id)
          ? true
          : false;
        res.status(200).send({
          success: followed
            ? 'You have successfully followed the playlist'
            : 'You have successfully unfollowed the playlist',
          data: { _id: _id, followed: followed },
        });
        return;
      } else {
        return res
          .status(400)
          .send({ error: 'The playlist has not been found, please try again' });
      }
    }
    next();
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function getAllPlaylists(req, res, next) {
  try {
    const _id = req.headers._id;
    const user = await UserRepo.findOne({ _id });
    if (user.error) {
      return res
        .status(400)
        .send({ error: 'The user has not been found, please try again' });
    }
    if (user.data) {
      const followed = await db.Playlist.aggregate([
        {
          $match: { followedBy: _id },
        },
        {
          $project: {
            id: 1,
            userId: 1,
            name: 1,
            description: 1,
            thumbnail: 1,
            publicAccessible: 1,
            followedBy: 1,
            isFollowed: {
              $cond: {
                if: { $in: [_id, '$followedBy'] },
                then: true,
                else: false,
              },
            },
          },
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
      ]).exec();

      const owned = await db.Playlist.aggregate([
        {
          $match: { userId: _id },
        },
        {
          $project: {
            id: 1,
            userId: 1,
            name: 1,
            description: 1,
            thumbnail: 1,
            publicAccessible: 1,
            followedBy: 1,
            isFollowed: {
              $cond: {
                if: { $in: [_id, '$followedBy'] },
                then: true,
                else: false,
              },
            },
          },
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
      ]).exec();

      if (followed.length > 0 || owned.length > 0) {
        res.status(200).send({
          success: 'Playlists found',
          data: {
            followed,
            owned,
          },
        });
        return;
      } else {
        return res.status(400).send({
          error: 'The playlists have not been found, please try again',
        });
      }
    }
    next();
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function addTrack(req, res, next) {
  const playListId = mongoose.Types.ObjectId(req.params.id);
  const trackId = req.body.trackId;

  try {
    const addedTrack = await PlaylistRepo.findByIdAndUpdate(
      playListId,
      {
        $push: { tracks: trackId },
      },
      {
        new: true,
      }
    );
    const populatedTracks = addedTrack.data.tracks.map((track) => {
      return {
        _id: track._id,
        name: track.name,
        thumbnail: track.thumbnail,
      };
    });

    res.status(200).send({
      success: 'Track added',
      data: {
        _id: addedTrack.data._id,
        name: addedTrack.data.name,
        description: addedTrack.data.description,
        thumbnail: addedTrack.data.thumbnail,
        tracks: populatedTracks,
      },
    });

    next();
  } catch (err) {
    next(err);
  }
}
async function getPublicPlaylists(req, res, next) {
  try {
    const _id = req.headers._id;
    const user = await UserRepo.findOne({ _id });
    if (user.error) {
      return res
        .status(400)
        .send({ error: 'The user has not been found, please try again' });
    }
    if (user.data) {
      const publicList = await db.Playlist.aggregate([
        {
          $match: { publicAccessible: true },
        },
        {
          $project: {
            id: 1,
            userId: 1,
            name: 1,
            description: 1,
            thumbnail: 1,
            publicAccessible: 1,
            followedBy: 1,
            isFollowed: {
              $cond: {
                if: { $in: [_id, '$followedBy'] },
                then: true,
                else: false,
              },
            },
          },
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
      ]).exec();

      if (publicList.length > 0) {
        res.status(200).send({
          success: 'Playlists found',
          data: {
            publicList,
          },
        });
        return;
      } else {
        return res.status(400).send({
          error: 'The playlists have not been found, please try again',
        });
      }
    }
    next();
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function getPlaylistById(req, res, next) {
  try {
    const _id = req.headers._id;
    const user = await UserRepo.findOne({ _id });
    if (user.error) {
      return res
        .status(400)
        .send({ error: 'The user has not been found, please try again' });
    }
    if (user.data) {
      const playlistId = req.params['id'];

      const playlistDetails = await db.Playlist.findOne(
        { _id: playlistId },
        {
          id: 1,
          userId: 1,
          name: 1,
          description: 1,
          thumbnail: 1,
          publicAccessible: 1,
          followedBy: 1,
          isFollowed: {
            $cond: {
              if: { $in: [_id, '$followedBy'] },
              then: true,
              else: false,
            },
          },
          tracks: []
        }).exec();

        if (playlistDetails) {
          const owned = (playlistDetails.userId === _id) ? true : false;
          // playlistDetails.owned = owned;
          res.status(200).send({
            success: 'Playlist found',
            data: {
              owned,
              playlistDetails
            }
          });
          return;
        } else {
          return res
            .status(400)
            .send({ error: 'The playlist has not been found, please try again' });
          }
        }
    next();
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function updatePlaylist(req, res, next) {
  try {
    const playlistId = req.params['id'];

    const playlist = await db.Playlist.findOne({ _id: playlistId },
      {
        userId: 1,
        name: 1,
        description: 1,
        thumbnail: 1,
        publicAccessible: 1,
      });

      let thumbnail = playlist.thumbnail;
      
      if (playlist) {
        if(req.file) {
            const publicId = await getPublicId(thumbnail);
            if (publicId) {
              await cloudinary.uploader.destroy(publicId, {
                resource_type: 'image',
              });

              const uploadNewImage = await cloudinary.uploader.upload(req.file.path, {
                resource_type: 'image',
                folder: 'playlists',
              });
              thumbnail = uploadNewImage.secure_url;
            }
            return;
          }

          const updatePlaylist = await db.Playlist.aggregate([
            {
              $match: { _id: mongoose.Types.ObjectId(playlistId) },
            },
            {
              $project: {
                name: 1,
                description: 1,
                thumbnail: 1,
                publicAccessible: 1,
              }
            },
          ]).exec();
            res.status(200).send({
              success: 'Playlist updated',
              data: updatePlaylist,
            });
            return;
      }else{
        return res.status(400).send({
          error: 'The playlist has not been found, please try again',
        });
      }
  } catch (error) {
    res.status(500).send({
      data: error.message,
    });
    next(error);
  }
}

module.exports = {
  createPlaylist,
  followPlaylist,
  getAllPlaylists,
  addTrack,
  getPublicPlaylists,
  getPlaylistById,
  updatePlaylist
};
