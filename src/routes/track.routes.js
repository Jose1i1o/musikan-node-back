const TrackRouter = require('express').Router();
const { authMiddleware } = require('../middleware');

const { multerAudio } = require('../utils/multer');
const { trackController } = require('../controllers');

TrackRouter.post(
  '/upload',
  authMiddleware,
  multerAudio.fields([
    { name: 'track', maxCount: 1 },
    { name: 'profilePicture', maxCount: 1 },
  ]),
  trackController.upload
);

module.exports = TrackRouter;
