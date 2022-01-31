const TrackRouter = require('express').Router();
const { authMiddleware } = require('../middleware');

const { multerAudio } = require('../utils/multer');
const { trackController } = require('../controllers');

TrackRouter.post(
  '/upload',
  authMiddleware,
  multerAudio.single('track'),
  trackController.upload
);


TrackRouter.get('/my-tracks/:id',
authMiddleware,
trackController.getMyTracks
);



TrackRouter.get('/liked-tracks/:id',
authMiddleware,
trackController.getLikedTracks
);



module.exports = TrackRouter;
