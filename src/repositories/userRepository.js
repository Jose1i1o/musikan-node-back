const db = require('../models');
const normalizeDbQuery = require('../utils/normalizeDBQuery');

class UserRepository {
  create(options) {
    return normalizeDbQuery(db.User.create(options));
  }
  findOne(query) {
    return normalizeDbQuery(db.User.findOne(query, '-__v'));
  }
}

module.exports = new UserRepository();
