const dotenv = require('dotenv');
const logger = require('loglevel');

logger.enableAll();
dotenv.config();

// const {
//   CLOUDINARY_API_KEY,
//   CLOUDINARY_API_SECRET,
//   CLOUDINARY_NAME,
//   FB_TYPE,
//   FB_PROJECT_ID,
//   FB_PRIVATE_KEY_ID,
//   FB_PRIVATE_KEY,
//   FB_CLIENT_EMAIL,
//   FB_CLIENT_ID,
//   FB_AUTH_URI,
//   FB_TOKEN_URI,
//   FB_AUTH_CERT_URL,
//   FB_CLIENT_CERT_URL,
//   CLIENT_URL,
//   DB_URL,
// } = process.env;

const CONFIG = {
  development: {
    app: {
      PORT: "https://musikan-node-back.herokuapp.com",
    },
    client: {
      // URL: process.env.CLIENT_URL || 'http://localhost:3000',
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
      type: process.env.FB_TYPE,
      project_id: process.env.FB_PROJECT_ID,
      private_key_id: process.env.FB_PRIVATE_KEY_ID,
      private_key: process.env.FB_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FB_CLIENT_EMAIL,
      client_id: process.env.FB_CLIENT_ID,
      auth_uri: process.env.FB_AUTH_URI,
      token_uri: process.env.FB_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FB_AUTH_CERT_URL,
      client_x509_cert_url: process.env.FB_CLIENT_CERT_URL,
    },
    cloudinary: {
      key: process.env.CLOUDINARY_API_KEY,
      secret: process.env.CLOUDINARY_API_SECRET,
      name: process.env.CLOUDINARY_NAME,
    },
  },
};

module.exports = { CONFIG };
