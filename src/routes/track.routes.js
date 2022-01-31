const TrackRouter = require('express').Router();
const { authMiddleware } = require('../middleware');

const { multerAudio } = require('../utils/multer');
const { trackController } = require('../controllers');

TrackRouter.post(
  '/upload-track',
  authMiddleware,
  multerAudio.single('track'),
  trackController.upload
);

module.exports = TrackRouter;
