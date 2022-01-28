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
  const { email } = req.body;

  try {
    const data = await db.User.findOne({
      email: email,
    });

    if (!data) {
      Object.keys(req.body).forEach((key) => {
        if (req.body[key] === '') {
          delete req.body[key];
        }
      });

      // let profilePicture = req.files?.profilePicture; // req.files.profilePicture[0] : null;
      let profilePicture = req.body.profilePicture || DEFAULT_PROFILE_IMAGE;

     //upload profile picture to cloudinary
     if (profilePicture) {
       const pathLocation = "../images/upload";

        await asyncWriteFile(
          pathLocation,
          Buffer.from(new Uint8Array(profilePicture.buffer)),
          );
        
      // cloudinary upload
      const { url } = await cloudinary.uploader.upload(
        pathLocation + "/" + profilePicture.filename,
        {
          resource_type: 'image',
          eager: [
            {
              width: 250,
              height: 250,
              crop: 'fill',
              gravity: 'face',
              radius: 20,
              effect: 'primavera',
            },
          ],
        },
      );
      profilePicture = url.secure_url;


    // delete on system once it is uploaded to cloudinary
    await fs.unlinkSync(pathLocation, (err) => {
      if (err) {
          console.log(err);   // handle the error
      }
    });
    return;
    } else (err) => {
      "Error: " + err;
    }

    const newUser = new db.User({
      // ...req.user,
      // firstName: firstName,
      // lastName: lastName,
      email: email,
      profilePicture: urlProfileImage,
    });

    await newUser.save();

    res.status(200).send({
      message: 'User registered',
    });
  }
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
