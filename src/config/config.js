const dotenv = require('dotenv')
const logger = require('loglevel')


logger.enableAll();
dotenv.config();

// var {
//   PORT,
//   CLIENT_URL,
//   DB_URL,
//   cloudinary_api_name,
//   cloudinary_api_key,
//   cloudinary_api_secret,
// } = process.env;

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || 'http://localhost:3000',
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.DB_URL,
    },
    cloudinary: {
      key: process.env.CLOUDINARY_API_KEY,
      secret: process.env.CLOUDINARY_API_SECRET,
      name: process.env.CLOUDINARY_API_NAME,
    },
    firebase: {
    },
  }
}

module.exports = {
  config: CONFIG
 }