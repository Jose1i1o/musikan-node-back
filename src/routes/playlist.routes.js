const PlaylistRouter = require('express').Router();
const { multerAudio, multerImage } = require('../utils/multer');

const { authMiddleware } = require('../middleware');
const { playlistController } = require('../controllers');

PlaylistRouter.post(
    '/',
    authMiddleware,
    multerAudio.fields([
        { name: 'track', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 },
      ]),
    playlistController.createPlaylist);

PlaylistRouter.get(
    '/',
    authMiddleware,
    playlistController.getAllPlaylists);



PlaylistRouter.put(
    '/:id/follow',
    authMiddleware,
    playlistController.followPlaylist);

module.exports = PlaylistRouter;