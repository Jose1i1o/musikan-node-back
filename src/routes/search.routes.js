const searchRouter = require('express').Router();
const { searchController } = require('../controllers');

console.log('searchRouter');
searchRouter.get('/tracks', searchController.searchTracks);

module.exports = searchRouter;


