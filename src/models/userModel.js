const mongoose = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'The email is required'],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    profilePicture: {
      type: String,
      trim: true,
    },
  },
  { 
    timestamps: true,
  }
);

const UserModel = new mongoose.model('users', UserSchema);

module.exports = UserModel;
