const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class TrackRepository {
  create(options) {
    return normalizeDBQuery(db.Track.create(options));
  }
  find(options) {
    return normalizeDBQuery(db.Track.find(options).populate('genre'));
  }
  findByIdAndUpdate(filter, data, conditions) {
    return normalizeDBQuery(
      db.Track.findByIdAndUpdate(filter, data, conditions).populate('genre')
    );
  }
  findOneAndDelete(options) {
    return normalizeDBQuery(db.Track.findOneAndDelete(options));
  }
}

module.exports = new TrackRepository();
