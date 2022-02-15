const db = require('../models');
const normalizeDbQuery = require('../utils/normalizeDBQuery');

class UserRepository {
  create(options) {
    return normalizeDbQuery(db.User.create(options));
  }
  findOne(query, options) {
    return normalizeDbQuery(db.User.findOne(query, options));
  }
  findOneAndUpdate(filter, update, conditions) {
    return normalizeDbQuery(
      db.User.findOneAndUpdate(filter, update, conditions)
    );
  }
}

module.exports = new UserRepository();
