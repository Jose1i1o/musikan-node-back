const db = require('../models');

const { cloudinary } = require('../services/cloudinary');

async function upload(req, res, next) {
  try {
    console.log(req.body);
    cloudinary.uploader.upload(req.file.path);
    res.status(200).send({ message: 'UPLOADING' });
    next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { upload };
