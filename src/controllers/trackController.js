const db = require('../models');

const { cloudinary } = require('../services/cloudinary');

async function upload(req, res, next) {
  //   const { name } = req;
  try {
    console.log(req.file);
    const uploadedAudio = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'video',
      folder: 'tracks',
    });
    console.log(uploadedAudio);
    const { asset_id, secure_url } = uploadedAudio;
    const createdTrack = await db.Track.create({
      _id: asset_id,
      url: secure_url,
      userId: req.user._id,
    });

    res.status(201).send({ message: 'UPLOADING', track: createdTrack });
    next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { upload };
