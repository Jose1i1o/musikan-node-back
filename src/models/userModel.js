const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
});

const UserModel = new mongoose.model('users', UserSchema);

module.exports = UserModel;
