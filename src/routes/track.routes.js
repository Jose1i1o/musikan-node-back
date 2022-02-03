const TrackRouter = require('express').Router();
const { authMiddleware } = require('../middleware');

const { multerAudio, multerImage } = require('../utils/multer');
const { trackController } = require('../controllers');

TrackRouter.post(
  '/',
  authMiddleware,
  multerAudio.fields([
    { name: 'track', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 },
  ]),
  trackController.upload
);
TrackRouter.put(
  '/:id',
  authMiddleware,
  multerAudio.single('track'),
  multerImage.single('thumbnail'),
  trackController.edit
);

TrackRouter.put(
  '/:id/like',
  authMiddleware,
  trackController.likeTrack
)

TrackRouter.delete('/:id', authMiddleware, trackController.deleteTrack);

module.exports = TrackRouter;
