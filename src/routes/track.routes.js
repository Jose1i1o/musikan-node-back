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
TrackRouter.patch(
  '/:id',
  authMiddleware,
  multerImage.single('thumbnail'),
  trackController.edit
);

TrackRouter.put(
  '/:id/like',
  authMiddleware,
  trackController.likeTrack
)



module.exports = TrackRouter;
