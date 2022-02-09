const TrackRouter = require('express').Router();
const { authMiddleware } = require('../middleware');

const { multerAudio, multerImage } = require('../utils/multer');
const { trackController } = require('../controllers');

TrackRouter.post(
  '/',

  multerAudio.fields([
    { name: 'track', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 },
  ]),
  trackController.uploadTrack
);
TrackRouter.patch(
  '/:id',
  multerImage.single('thumbnail'),
  trackController.editTrack
);


TrackRouter.get('/:id', trackController.getTrack);

TrackRouter.get(
  '/:id/play',
  multerImage.single('thumbnail'),
  trackController.playTrack
);

TrackRouter.put('/:id/like', trackController.likeTrack);

TrackRouter.delete('/:id', trackController.deleteTrack);

module.exports = TrackRouter;
