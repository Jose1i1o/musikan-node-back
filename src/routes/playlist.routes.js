const PlaylistRouter = require('express').Router();
const { multerAudio, multerImage } = require('../utils/multer');

const { authMiddleware } = require('../middleware');
const { playlistController } = require('../controllers');

PlaylistRouter.post(
  '/',
  multerAudio.fields([
    { name: 'track', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 },
  ]),
  playlistController.createPlaylist
);

PlaylistRouter.get('/', playlistController.getAllPlaylists);

// PlaylistRouter.get(
//     '/:id',
//     playlistController.getPlaylistsByUser);

PlaylistRouter.patch('/:id', playlistController.addTrack);

PlaylistRouter.put('/:id/follow', playlistController.followPlaylist);

module.exports = PlaylistRouter;
