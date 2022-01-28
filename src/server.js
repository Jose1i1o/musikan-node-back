const express = require('express');
const { json, urlencoded } = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { config } = require('./config');

const { UserRouter } = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(
  json({
    limit: '50mb',
  })
);
app.use(urlencoded({ extended: true }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(
  cors({
    origin: config.development.client.URL,
  })
);

app.use('/user', UserRouter);

module.exports = app;
