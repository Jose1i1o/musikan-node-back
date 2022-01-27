const dotenv = require('dotenv');
const logger = require('loglevel');

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
      type: process.env.FB_TYPE,
      project_id: process.env.FB_PROJECT_ID,
      private_key_id: process.env.FB_PRIVATE_KEY_ID,
      private_key: process.env.FB_PRIVATE_KEY,
      client_email: process.env.FB_CLIENT_EMAIL,
      client_id: process.env.FB_CLIENT_ID,
      auth_uri: process.env.FB_AUTH_URI,
      token_uri: process.env.FB_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FB_AUTH_CERT_URL,
      client_x509_cert_url: process.env.FB_CLIENT_CERT_URL,
    },
  },
};

module.exports = { CONFIG };
