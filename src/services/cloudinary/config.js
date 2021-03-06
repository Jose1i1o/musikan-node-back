const { config } = require('../../config');
var cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: config.development.cloudinary.name,
  api_key: config.development.cloudinary.key,
  api_secret: config.development.cloudinary.secret,
  secure: true,
});

module.exports = { cloudinary };
