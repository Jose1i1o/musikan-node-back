const db = require('../models');

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
    if (!createdGenre) {
      const newGenre = await db.Genre.create({ name: genre });
      trackSchema.genre = newGenre._id;
    }

    // Create the new track
    await db.Track.create(trackSchema);

    // Filter the new list of updated tracks uploaded by the logged user and add it to the server response
    const updatedTracks = await getTracksWithGenres(req.user._id);
    console.log(updatedTracks);
    res.status(201).send({
      message: 'UPLOADED',
      data: updatedTracks,
    });
    next();
  } catch (err) {
    console.log(err);
  }
}

async function getTracksWithGenres(userId) {
  const findingTracks = await db.Track.find({
    userId: userId,
  }).populate('genre');

  const tracks = findingTracks.map((track) => {
    return {
      _id: track._id,
      name: track.name,
      thumbnail: track.thumbnail,
      genre: track.genre.name,
    };
  });
  return tracks;
}

async function getMyTracks(req, res, next) {
  try {
    const tracks = await getTracksWithGenres(req.user._id);

    res.status(200).send({
      message: 'MY UPLOAD TRACKS',
      tracks,
    });
    next();
  } catch (err) {
    console.log(err);
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

    await db.Track.findByIdAndUpdate(id, trackSchema, {
      new: true,
    });

    const tracks = await getTracksWithGenres(req.user._id);
    res.status(200).send({ message: 'Track updated', data: tracks });
  } catch (err) {
    next(err);
  }
}

async function deleteTrack(req, res, next) {
  const { id } = req.params;

  try {
    await db.Track.findOneAndDelete({ _id: id, userId: req.user._id });
    const tracks = await getTracksWithGenres(req.user._id);
    res.status(200).send(tracks);
  } catch (err) {
    next(err);
  }
  next();
}

async function getAllTracks(id) {
  return db.Track.find({ userId: id }).select({
    _id: 0,
    name: 1,
    url: 1,
    thumbnail: 1,
  });
}

module.exports = { upload, edit, getMyTracks, getAllTracks, deleteTrack };
