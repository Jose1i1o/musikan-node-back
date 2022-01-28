const { UserRepo } = require('../repositories');

const db = require('../models');
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

    console.log('dentro');
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

async function updateUser(req, res, next) {
  try {
    const { _id } = req.user;
    const { email, userName } = req.body;
    const mainImage = req.body.profilePicture;
    console.log(mainImage);

    if (mainImage) {
      const uploadImage = await cloudinary.uploader.upload(mainImage, {
        upload_preset: 'user-profile-pictures',
        folder: 'user-profile-pictures',
      });

      const user = await db.User.findByIdAndUpdate(
        _id,
        {
          $set: {
            email: email,
            userName: userName,
            profilePicture: uploadImage.url,
          },
        },
        { new: true }
      );
      res.status(200).send({
        message: 'User profile updated',
        user: user,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
}

module.exports = {
  signUp,
  signOut,
  updateUser,
};
