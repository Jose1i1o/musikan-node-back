const db = require('../models');
const normalizeDbQuery = require('../utils/normalizeDBQuery');

class PlayListRepository {
  create(options) {
    return normalizeDbQuery(db.Playlist.create(options));
  }
  findOne(query) {
    return normalizeDbQuery(db.Playlist.findOne(query, '-__v'));
  }
  find(filter, options) {
    return normalizeDbQuery(db.Playlist.find(filter, options).populate('playlist'));
  }
}

module.exports = new PlayListRepository();
