const db = require('../models');
const normalizeDbQuery = require('../utils/normalizeDBQuery');

class UserRepository {
  create(options) {
    return normalizeDbQuery(db.User.create(options));
  }
  findOne(query) {
    return normalizeDbQuery(db.User.findOne(query, '-__v'));
  }
  findOneAndUpdate(filter, update, conditions) {
    return normalizeDbQuery(
      db.User.findOneAndUpdate(filter, update, conditions)
    );
  }
}

module.exports = new UserRepository();
