const db = require('../models');

const { cloudinary } = require('../services/cloudinary');

async function upload(req, res, next) {
  const { name, genre } = req.body;
  try {
    const uploadedAudio = cloudinary.uploader.upload(req.files.track[0].path, {
      resource_type: 'video',
      folder: 'tracks',
    });

    const uploadedImage = cloudinary.uploader.upload(
      req.files.profilePicture[0].path,
      {
        resource_type: 'image',
        folder: 'tracks-thumbnails',
      }
    );
    const uploads = await Promise.all([uploadedAudio, uploadedImage]);

    const audio = uploads[0];
    const image = uploads[1];

    const trackSchema = {
      _id: audio.asset_id,
      url: audio.secure_url,
      userId: req.user._id,
      thumbnail: image.secure_url,
      name: name,
    };

    const createdGenre = await db.Genre.findOne({ name: genre }).exec();
    if (createdGenre) {
      trackSchema.genre = createdGenre._id;
    }
    // let genreId = createdGenre._id;
    if (!createdGenre) {
      const newGenre = await db.Genre.create({ name: genre });
      trackSchema.genre = newGenre._id;
      //   genreId = newGenre._id;
    }

    const createdTrack = await db.Track.create(trackSchema);

    res.status(201).send({
      message: 'UPLOADED',
      data: createdTrack,
    });
    next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { upload };
