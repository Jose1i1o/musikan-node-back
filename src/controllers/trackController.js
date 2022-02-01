const db = require('../models');

const { cloudinary } = require('../services/cloudinary');

async function upload(req, res, next) {
  //   const { name } = req;
  try {
    const {
      title,
      thumbnail,
      userId,
      likedBy,
    } = req.body;
    
    const { secure_url } = uploadedAudio;
    
    const uploadedAudio = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'video',
      folder: 'tracks',
    });
    console.log('video uploaded')
    console.log(uploadedAudio);
    const createdTrack = await db.Track.create({
      // _id: asset_id,
      userId: userId,
      url: secure_url,
      // title: title,
      // thumbnail: thumbnail,
      likedBy: likedBy,
    });

    res.status(201).send({ message: 'UPLOADING', track: createdTrack });
    next();
  } catch (err) {
    console.log(err);
  }
}

async function getMyTracks(req, res, next) {
  try {
    const tracks = await db.Track.find({ userId: req.user._id });
    res.status(200).send({ message: 'MY UPLOAD TRACKS', tracks });
    next();
  } catch (err) {
    console.log(err);
  }
}

async function getLikedTracks(req, res, next) {
  try {
    const { email } = req.user;
    const { _id: userId } = await db.User.findOne({ email }, { _id: 1 });

    const likedTracks = await db.Track.find(
      { likedBy: { $in: [userId] } },
      { 
        isLikedBy:{ $setIsSubset: [[userId], "$likedBy" ] },
        // url: 1,
      }
    )
    .sort({ likes: -1 });

    res.status(200).send({ message: 'LIKED TRACKS', likedTracks });
    next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { upload, getMyTracks, getLikedTracks };
