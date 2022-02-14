const express = require('express');
const { json } = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { config } = require('./config');

const {
  UserRouter,
  TrackRouter,
  GenreRouter,
  MeRouter,
  PlaylistRouter,
  SearchRouter,
} = require('./routes');
const { errorMiddleware } = require('./middleware');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(
  json({
    limit: '50mb',
  })
);
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(
  cors({
    origin: config.development.client.URL,
  })
);

app.use(errorMiddleware);

app.use('/api/user', UserRouter);
app.use('/api/tracks', TrackRouter);
app.use('/api/genre', GenreRouter);
app.use('/api/me', MeRouter);
app.use('/api/playlist', PlaylistRouter);
app.use('/api/search', SearchRouter);

module.exports = app;
