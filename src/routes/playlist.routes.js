const PlaylistRouter = require('express').Router();
const { multerAudio, multerImage } = require('../utils/multer');

const { authMiddleware } = require('../middleware');
const { playlistController } = require('../controllers');

PlaylistRouter.post(
    '/',
    multerImage.single('thumbnail'),
    playlistController.createPlaylist);

PlaylistRouter.get('/', playlistController.getAllPlaylists);

PlaylistRouter.get('/public', playlistController.getPublicPlaylists);

PlaylistRouter.patch('/:id', playlistController.addTrack);
PlaylistRouter.get('/:id', playlistController.getPlaylistById);

PlaylistRouter.put('/:id/follow', playlistController.followPlaylist);

PlaylistRouter.patch(
    '/update/:id',
    multerImage.single('thumbnail'),
    playlistController.updatePlaylist);

PlaylistRouter.delete('/:id', playlistController.deletePlaylist);

module.exports = PlaylistRouter;
