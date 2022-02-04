const PlaylistRouter = require('express').Router();

const { authMiddleware } = require('../middleware');
const { playlistController } = require('../controllers');

PlaylistRouter.post('/', authMiddleware, playlistController.createPlaylist);

module.exports = PlaylistRouter;