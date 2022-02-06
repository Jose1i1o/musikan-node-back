const MeRouter = require('express').Router();

const { trackController } = require('../controllers');

MeRouter.get('/tracks', trackController.getMyTracks);

MeRouter.get('/tracks/liked', trackController.getLikedTracks);

module.exports = MeRouter;
