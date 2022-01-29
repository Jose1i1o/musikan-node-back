const { UserRepo } = require('../repositories');
const db = require('../models');
const upload = require('../utils/multer');

const { cloudinary } = require('../services/cloudinary');

const { DEFAULT_PROFILE_IMAGE } = require('../utils/defaults');

async function signUp(req, res, next) {
  const { email, _id } = req.user;
  const userName = req.user.userName ? req.user.userName : req.body.userName;
  const profilePicture = req.body.profilePicture || DEFAULT_PROFILE_IMAGE;
  try {
    const foundUser = await UserRepo.findOne({ email: email });

    if (foundUser.error) res.status(400).send({ message: 'User not found' });

    if (foundUser.data) {
      return res
        .status(200)
        .send({ user: foundUser.data, message: 'User logged' });
    }

    const newUser = await UserRepo.create({
      _id: _id,
      email: email,
      userName: userName,
      profilePicture: profilePicture,
    });

    res.status(201).send({
      user: newUser.data,
      message: 'User created',
    });
  } catch (err) {
    next(err);
  }
}

async function signOut(req, res, next) {
  try {
    res.status(200).send({ message: 'User logged out' });
  } catch (err) {
    next(err);
  }
}

async function updateAvatar(req, res, next) {
  const { _id } = req.user;

  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const profilePicture = result.secure_url;

    const foundUser = await db.User.findOneAndUpdate(
      { _id: _id },
      { profilePicture: profilePicture },
      { new: true }
    );

    res.status(200).send(foundUser.profilePicture);
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  const { _id } = req.user;

  const { userName, email } = req.body;

  try {
    const updatedUser = await db.User.findOneAndUpdate(
      { _id: _id },
      { userName: userName, email },
      { new: true }
    );

    res
      .status(200)
      .send({
        user: { userName: updatedUser.userName, email: updatedUser.email },
        message: 'UPDATED',
      });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  signUp,
  signOut,
  updateAvatar,
  updateUser,
};
