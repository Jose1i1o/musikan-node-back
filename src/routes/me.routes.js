const MeRouter = require('express').Router();
const { authMiddleware } = require('../middleware');

const { trackController } = require('../controllers');


MeRouter.get('/tracks',
authMiddleware,
trackController.getMyTracks
);

MeRouter.get('/tracks/liked',
authMiddleware,
trackController.getLikedTracks
);

module.exports = MeRouter;