const config = require('../../config');
var cloudinary = require('cloudinary').v2;
// console.log(config);

cloudinary.config({
  // cloud_name: config.cloudinary.name,
  // api_key: config.cloudinary.key,
  // api_secret: config.cloudinary.secret,
  // secure: true,
});

module.exports = { cloudinary };
