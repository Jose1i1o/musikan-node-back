const db = require('../models');
const {
  UserRepo,
  PlayListRepository,
  PlaylistRepo,
} = require('../repositories');
const { DEFAULT_PLAYLIST_THUMBNAIL } = require('../utils/defaults');

const { cloudinary } = require('../services/cloudinary');
const { getPublicId } = require('../utils/cloudinaryUtils');
const mongoose = require('mongoose');

function getPlaylists(ListOfPlaylists) {
  const playlists = ListOfPlaylists.map((playlist) => {
    return {
      userId: playlist.user,
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
    const _id = req.headers._id;
    const user = await UserRepo.findOne({ _id: _id });
    // set default image if req.files.thumbnail is undefined
    const thumbnail = req.files.thumbnail
      ? req.files.thumbnail[0].path
      : DEFAULT_PLAYLIST_THUMBNAIL;
    const playlistData = {
      userId: _id,
      name: req.body.name,
      description: req.body.description,
      thumbnail: thumbnail,
      publicAccessible: req.body.publicAccessible,
    };

    if (user.error) {
      return res
        .status(400)
        .send({ error: 'The user has not been found, please try again' });
    }

    if (user.data) {
      const { name, description, publicAccessible, user, thumbnail } =
        playlistData;
      const thumbnailPicture = await cloudinary.uploader.upload(thumbnail, {
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
    // if playlistData has data for the playlist then create it
    if (playlistData) {
      const playlists = await db.Playlist.find({ userId: _id }).exec();
      const playlistsList = getPlaylists(playlists);
      return res.status(201).send({
        success: 'Playlist created successfully',
        data: playlistsList,
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
  const tracks = req.body.tracks;

  try {
    const addedTrack = await PlaylistRepo.findByIdAndUpdate(
      playListId,
      {
        $push: { tracks: tracks },
      },
      {
        new: true,
      }
    );

    res.status(200).send({
      success: 'Track added',
      data: addedTrack.data,
    });

    // const addedTrack = await PlaylistRepo.findByIdAndUpdate(
    //   playListId,
    //   {
    //     $push: { tracks: trackId },
    //   },
    //   {
    //     new: true,
    //   }
    // );

    // res.status(200).send({
    //   success: 'Track added',
    //   data: addedTrack.data,
    // });

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
          tracks: [],
        }
      ).exec();

      if (playlistDetails) {
        const owned = playlistDetails.userId === _id ? true : false;
        res.status(200).send({
          success: 'Playlist found',
          data: {
            owned,
            playlistDetails,
          },
        });
        return;
      } else {
        return res.status(400).send({
          error: 'The playlist has not been found, please try again',
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

module.exports = {
  createPlaylist,
  followPlaylist,
  getAllPlaylists,
  addTrack,
  getPublicPlaylists,
  getPlaylistById,
};
