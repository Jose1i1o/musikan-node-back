const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class GenreRepository {
  find() {
    return normalizeDBQuery(db.Genre.find().select({ name: 1, _id: 1 }));
  }
  create(options) {
    return normalizeDBQuery(db.Genre.create(options));
  }
}

module.exports = new GenreRepository();
