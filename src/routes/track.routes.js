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
  trackController.uploadTrack
);
TrackRouter.put(
  '/:id',
  authMiddleware,
  multerAudio.fields([
    { name: 'track', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 },
  ]),
  trackController.editTrack
);
TrackRouter.get(
  '/:id',
  authMiddleware,
  multerImage.single('thumbnail'),
  trackController.getTrack
);

TrackRouter.put('/:id/like', authMiddleware, trackController.likeTrack);

TrackRouter.delete('/:id', authMiddleware, trackController.deleteTrack);

module.exports = TrackRouter;
