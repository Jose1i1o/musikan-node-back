const dotenv = require('dotenv')
const logger = require('loglevel')

dotenv.config();

logger.enableAll();


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
      firebase: {
    },
  }
}
  
  module.exports = { CONFIG }