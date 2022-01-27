const express = require('express');
const { json, urlencoded } = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { CONFIG } = require('./config/config');
const { UserRouter } = require('./routes');
const { errorMiddleware } = require('./middleware');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(
  cors({
    origin: CONFIG.development.client.URL,
  })
);

app.use(errorMiddleware);

app.use('/user', UserRouter);

module.exports = app;
