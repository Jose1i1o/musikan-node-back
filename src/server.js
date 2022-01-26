const express = require('express');
const { json, urlencoded } = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { CONFIG } = require('./config/config');

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

// app.use('/users', UsersRouter);

module.exports = app;
