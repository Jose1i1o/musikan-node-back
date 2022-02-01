const express = require('express');
const { json, urlencoded } = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { config } = require('./config');

const { UserRouter, TrackRouter, GenreRouter } = require('./routes');
const { authMiddleware, errorMiddleware } = require('./middleware');
const { trackController } = require('./controllers');

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

app.use('/user', UserRouter);
app.use('/track', TrackRouter);
app.use('/genre', GenreRouter);
app.get('/me/tracks',
authMiddleware,
trackController.getMyTracks
);

module.exports = app;
