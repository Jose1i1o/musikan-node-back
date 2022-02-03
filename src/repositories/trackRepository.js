const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class TrackRepository {
  create(options) {
    return normalizeDBQuery(db.Track.create(options));
  }
  find(filter, options) {
    return normalizeDBQuery(db.Track.find(filter, options).populate('genre'));
  }
  findByIdAndUpdate(filter, data, conditions) {
    return normalizeDBQuery(
      db.Track.findByIdAndUpdate(filter, data, conditions).populate('genre')
    );
  }
  findOneAndDelete(options) {
    return normalizeDBQuery(db.Track.findOneAndDelete(options));
  }

  findOne(options) {
    return normalizeDBQuery(db.Track.findOne(options));
  }
}

module.exports = new TrackRepository();
