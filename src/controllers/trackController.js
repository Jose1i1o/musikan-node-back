const db = require('../models');
const { TrackRepo } = require('../repositories');

const { cloudinary } = require('../services/cloudinary');

async function upload(req, res, next) {
  const { name, genre } = req.body;
  try {
    // Upload audio to cloudinary
    const uploadedAudio = cloudinary.uploader.upload(req.files.track[0].path, {
      resource_type: 'video',
      folder: 'tracks',
    });

    // Upload thumbnail to cloudinary
    const uploadedImage = cloudinary.uploader.upload(
      req.files.thumbnail[0].path,
      {
        resource_type: 'image',
        folder: 'tracks-thumbnails',
      }
    );

    // Wait untill both uploads finish
    const uploads = await Promise.all([uploadedAudio, uploadedImage]);

    const audio = uploads[0];
    const image = uploads[1];

    // Define the response data schema
    const trackSchema = {
      _id: audio.asset_id,
      url: audio.secure_url,
      userId: req.user._id,
      thumbnail: image.secure_url,
      name: name,
    };

    // If the genre already exists, get his ID and
    const createdGenre = await db.Genre.findOne({ name: genre }).exec();
    if (createdGenre) {
      trackSchema.genre = createdGenre._id;
    }

    // If genre doesn't exist, create it
    if (!createdGenre) {
      const newGenre = await db.Genre.create({ name: genre });
      trackSchema.genre = newGenre._id;
    }

    // Create the new track
    const newTrack = await TrackRepo.create(trackSchema);
    if (newTrack.error)
      res.status(400).send({ error: 'Error uploading your track' });

    // Filter the new list of updated tracks uploaded by the logged user and add it to the server response
    if (newTrack.data) {
      res.status(201).send({
        success: 'Your track has successfully uploaded',
        data: {
          _id: newTrack.data._id,
          name: newTrack.data.name,
          thumbnail: newTrack.data.thumbnail,
          genre: newTrack.data.genre,
        },
      });
    }
    res.status(200).send({ success: 'Can not process your request' });
  } catch (err) {
    next(err);
  }
}

async function getMyTracks(req, res, next) {
  try {
    const findingTracks = await TrackRepo.find({
      userId: req.user._id,
    });
    if (findingTracks.error)
      res.status(400).send({ error: 'Error uploading your track' });

    if (findingTracks.data) {
      const tracks = findingTracks.data.map((track) => {
        return {
          _id: track._id,
          name: track.name,
          thumbnail: track.thumbnail,
          genre: track.genre.name,
        };
      });

      res.status(200).send({
        success: 'Your tracks have been loaded',
        data: tracks,
      });
    }
    res.status(200).send({
      message: 'You did not upload any tracks yet',
    });
  } catch (error) {
    next(err);
  }
}

async function edit(req, res, next) {
  const { id } = req.params;
  const { name, genre } = req.body;

  const trackSchema = { name: name };

  try {
    const uploadedPicture = await cloudinary.uploader.upload(req.file.path);
    trackSchema.thumbnail = uploadedPicture.secure_url;

    const createdGenre = await db.Genre.findOne({ name: genre }).exec();
    if (createdGenre) {
      trackSchema.genre = createdGenre._id;
    }
    if (!createdGenre) {
      const newGenre = await db.Genre.create({ name: genre });
      trackSchema.genre = newGenre._id;
    }

    const updatedTrack = await TrackRepo.findByIdAndUpdate(id, trackSchema, {
      new: true,
    });

    if (updatedTrack.error)
      res.status(400).send({ error: 'Error updating your track' });
    console.log(updatedTrack);

    if (updatedTrack.data) {
      res.status(200).send({
        success: `Track ${updatedTrack.data.name} updated`,
        data: {
          _id: updatedTrack.data._id,
          name: updatedTrack.data.name,
          thumbnail: updatedTrack.data.thumbnail,
          genre: updatedTrack.data.genre.name,
        },
      });
    }
    res.status(200).send({ message: 'Can not process your request' });
  } catch (err) {
    next(err);
  }
}

async function deleteTrack(req, res, next) {
  const { id } = req.params;

  try {
    const deletedTrack = await TrackRepo.findOneAndDelete({
      _id: id,
      userId: req.user._id,
    });

    if (deletedTrack.error)
      res.status(400).send({ error: 'Error deleting your track' });

    res
      .status(200)
      .send({ success: 'Your track has been deleted', data: { _id: id } });
  } catch (err) {
    next(err);
  }
  next();
}

async function getLikedTracks(req, res, next) {
  try {
    const tracks = await TrackRepo.find(
      { likedBy: req.user._id },
      { _id: 1, name: 1, url: 1, thumbnail: 1 }
    );
    console.log(tracks);
    if (tracks.error)
      res.status(400).send({ error: 'Error deleting your track' });

    if (tracks.data) {
      const filteredTracks = tracks.data.map((track) => {
        return {
          _id: track._id,
          name: track.name,
          thumbnail: track.thumbnail,
          genre: track.genre.name,
        };
      });

      res.status(200).send({ success: 'Liked tracks', data: filteredTracks });
    }
    res.status(200).send({ message: 'You did not like any track yet' });
  } catch (err) {
    next(err);
  }
}

async function likeTrack(req, res, next) {
  try {
    const id = req.params.id;
    const userId = req.user._id;

    const updateLike = await TrackRepo.findByIdAndUpdate(
      id,

      [
        {
          $set: {
            likedBy: {
              $cond: {
                if: { $in: [userId, '$likedBy'] },
                then: { $setDifference: ['$likedBy', [userId]] },
                else: { $concatArrays: ['$likedBy', [userId]] },
              },
            },
          },
        },
      ],
      { new: true }
    );
    if (updateLike.error)
      res.status(400).send({ error: 'Error deleting your track' });

    if (updateLike.data) {
      const like = updateLike.data.likedBy.includes(userId) ? true : false;
      res.status(200).send({
        success: like
          ? 'You like a new track'
          : 'You do not like a track anymore',
        data: { _id: updateLike.data._id, like: like },
      });
    }
    res.status(200).send({ message: 'Can not process your like request' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  upload,
  edit,
  getMyTracks,
  getLikedTracks,
  likeTrack,
  deleteTrack,
};
