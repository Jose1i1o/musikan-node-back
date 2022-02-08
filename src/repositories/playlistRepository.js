const db = require('../models');
const normalizeDbQuery = require('../utils/normalizeDBQuery');

class PlayListRepository {
  create(query) {
    return normalizeDbQuery(db.Playlist.create(query));
  }
  findOne(query) {
    return normalizeDbQuery(db.Playlist.findOne(query, '-__v'));
  }
  find(filter, options) {
    return normalizeDbQuery(db.Playlist.find(filter, options));
  }
}

module.exports = new PlayListRepository();
