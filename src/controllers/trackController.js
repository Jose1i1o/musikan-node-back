const db = require('../models');

const { cloudinary } = require('../services/cloudinary');

async function upload(req, res, next) {
  try {
    console.log(req.body);
    next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { upload };
