const { User, Track, Genre } = require('../models');
const db = require('../models');

const { cloudinary } = require('../services/cloudinary');

async function upload(req, res, next) {
  const { name, genre } = req.body;
  console.log(req.files);
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
    const updatedTracks = await Track.find({ userId: req.user._id }).select({
      _id: 0,
      name: 1,
      url: 1,
      thumbnail: 1,
    });

    res.status(201).send({
      message: 'UPLOADED',
      data: updatedTracks,
    });
    next();
  } catch (err) {
    console.log(err);
  }
}

export async function edit(req, res, next) {
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

    const updatedTrack = await db.Track.findByIdAndUpdate(id, trackSchema, {
      new: true,
    });

    const updatedTracks = await getAllTracks(req.user._id);
    res.status(200).send({ res: updatedTracks });
  } catch (err) {
    next(err);
  }
}

function getAllTracks(id) {
  return Track.find({ userId: id }).select({
    _id: 0,
    name: 1,
    url: 1,
    thumbnail: 1,
  });
}

module.exports = { upload, edit };
