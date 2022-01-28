const db = require('../models');
const { cloudinary } = require('../services/cloudinary');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const asyncWriteFile = promisify(fs.writeFile);

const { DEFAULT_PROFILE_IMAGE } = require('../utils/defaults');

async function login(req, res, next) {
  const { email } = req.body;
  try {
    await db.User.findOne({
      email: email,
    })
      .select()
      .lean()
      .exec();

    res.status(200).send({
      message: 'Logged in',
    });
  } catch (error) {
    res.status(500).send({
      message: 'User not authorized',
    });
  }
}

async function register(req, res, next) {
  // const { id } = req.user;
  const { email, firstName, lastName } = req.body;
  let profilePicture = req.body.profilePicture || DEFAULT_PROFILE_IMAGE;

  try {

    const newUser = new db.User({
      email: email,
      firstName: firstName || '',
      lastName: lastName || '',
      profilePicture: await profilePicture.url,
    });

    await newUser.save();

    return res.status(200).send({
      message: 'User registered, please login',
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}


module.exports = {
  login: login,
  register: register,
};
