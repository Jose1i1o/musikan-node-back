const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class TrackRepository {
  create(options) {
    return normalizeDBQuery(db.Track.create(options));
  }
  find(options) {
    return normalizeDBQuery(db.Track.find(options).populate('genre'));
  }
}

module.exports = new TrackRepository();
