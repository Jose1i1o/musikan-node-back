const express = require('express');
const { json, urlencoded } = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

const { 
  UserRouter,
  AccountRouter,
} = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(
  cors({
    origin: config.development.client.URL,
  })
);

app.use('/user', UserRouter);
app.use('/account', AccountRouter);

module.exports = app;
