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
  findByIdAndUpdate(filter, query, options) {
    return normalizeDbQuery(
      db.Playlist.findByIdAndUpdate(filter, query, options).populate('tracks')
    );
  }
}

module.exports = new PlayListRepository();
