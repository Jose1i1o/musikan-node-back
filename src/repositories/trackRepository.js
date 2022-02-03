const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class TrackRepository {
  create(options) {
    return normalizeDBQuery(db.Track.create(options));
  }
  find(filter, options) {
    return normalizeDBQuery(db.Track.find(filter, options).populate('genre'));
  }
  findOne(filter) {
    return normalizeDBQuery(db.Track.findOne(filter).populate('genre'));
  }
  findByIdAndUpdate(filter, data, conditions) {
    return normalizeDBQuery(
      db.Track.findByIdAndUpdate(filter, data, conditions).populate('genre')
    );
  }
  deleteOne(options) {
    return normalizeDBQuery(db.Track.deleteOne(options));
  }
}

module.exports = new TrackRepository();
