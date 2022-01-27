const dotenv = require('dotenv')
const logger = require('loglevel')

dotenv.config();

logger.enableAll();

const {
  PORT,
  CLIENT_URL,
  DB_URL,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_API_NAME
}

const CONFIG = {
    development: {
      app: {
        PORT: PORT || 4000,
      },
      client: {
        URL: CLIENT_URL || 'http://localhost:3000',
      },
      logger: {
        warn: logger.warn,
        info: logger.info,
        error: logger.error,
        trace: logger.trace,
        debug: logger.debug,
      },
      db: {
        url: DB_URL,
      },
      cloudinary: {
        key: CLOUDINARY_API_KEY,
        secret: CLOUDINARY_API_SECRET,
        name: CLOUDINARY_API_NAME,
      },
      firebase: {
    },
  }
}

module.exports = { 
  CONFIG: CONFIG
 }