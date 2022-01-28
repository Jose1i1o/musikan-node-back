const db = require('../models');
const { cloudinary } = require('../services/cloudinary');

async function updateUserProfile(req, res, next) {
  try {
    const id = req.params['id'];
    const { email, firstName, lastName } = req.body;
    const mainImage = req.body.profilePicture;

    if (mainImage) {
      var uploadImage = await cloudinary.uploader.upload(mainImage, {
        upload_preset: 'user-profile-pictures',
        folder: 'user-profile-pictures',
      });
    } else {
      console.log('No image uploaded');
    }
    const user = await db.User.findByIdAndUpdate(
      id,
      {
        $set: {
          email: email,
          firstName: firstName ? firstName : '',
          lastName: lastName ? lastName : '',
          profilePicture: uploadImage.url,
        },
      },
      { new: true }
    );
    console.log(user);
    res.status(200).send({
      message: 'User profile updated',
      user: user,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
}

module.exports = {
  updateUserProfile,
};
