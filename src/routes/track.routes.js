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




// get my uploaded songs
TrackRouter.get('/my-tracks/:id', authMiddleware, trackController.getMyTracks);




module.exports = TrackRouter;
