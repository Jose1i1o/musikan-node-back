const db = require('../models');

const { cloudinary } = require('../services/cloudinary');

async function upload(req, res, next) {
  const { name, genre } = req.body;
  console.log(req.files);
  try {
    // Upload audio to cloudinary
    const uploadedAudio = cloudinary.uploader.upload(req.files.track[0].path, {
      resource_type: 'video',
      folder: 'tracks',
    });

    // Upload thumbnail to cloudinary
    const uploadedImage = cloudinary.uploader.upload(
      req.files.thumbnail[0].path,
      {
        resource_type: 'image',
        folder: 'tracks-thumbnails',
      }
    );

    // Wait untill both uploads finish
    const uploads = await Promise.all([uploadedAudio, uploadedImage]);

    const audio = uploads[0];
    const image = uploads[1];
    const emptyArray = [];

    // Define the response data schema
    const trackSchema = {
      _id: audio.asset_id,
      url: audio.secure_url,
      userId: req.user._id,
      thumbnail: image.secure_url,
      name: name,
      likedBy: '',
    };

    // If the genre already exists, get his ID and
    const createdGenre = await db.Genre.findOne({ name: genre }).exec();
    if (createdGenre) {
      trackSchema.genre = createdGenre._id;
    }
    if (!createdGenre) {
      const newGenre = await db.Genre.create({ name: genre });
      trackSchema.genre = newGenre._id;
    }

    // Create the new track
    await db.Track.create(trackSchema);

    // Filter the new list of updated tracks uploaded by the logged user and add it to the server response
    const updatedTracks = await db.Track.filter({ userId: req.user._id }).select({
      _id: 0,
      name: 1,
      url: 1,
      thumbnail: 1,
    });

    res.status(201).send({
      message: 'UPLOADED',
      data: updatedTracks,
    });
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

async function edit(req, res, next) {
  const { id } = req.params;
  const { name, genre } = req.body;

  const trackSchema = { name: name };

  try {
    const uploadedPicture = await cloudinary.uploader.upload(req.file.path);
    trackSchema.thumbnail = uploadedPicture.secure_url;

    const createdGenre = await db.Genre.findOne({ name: genre }).exec();
    if (createdGenre) {
      trackSchema.genre = createdGenre._id;
    }
    if (!createdGenre) {
      const newGenre = await db.Genre.create({ name: genre });
      trackSchema.genre = newGenre._id;
    }

    const updatedTrack = await db.Track.findByIdAndUpdate(id, trackSchema, {
      new: true,
    });

    const updatedTracks = await getAllTracks(req.user._id);
    res.status(200).send({ message: 'Track updated', data: updatedTracks });
  } catch (err) {
    next(err);
  }
}

async function deleteTrack(req, res, next) {
  const { id } = req.params;

  try {
    await db.Track.findOneAndDelete({ _id: id, userId: req.user._id });
    const updatedTracks = await getAllTracks(req.user._id);
    res.status(200).send(updatedTracks);
  } catch (err) {
    next(err);
  }
  next();
}

async function getAllTracks(id) {
  return db.Track.find({ userId: id }).select({
    _id: 0,
    name: 1,
    url: 1,
    thumbnail: 1,
  });
}

async function getLikedTracks(req, res, next) {
  
  try {
    console.log(req.user._id);
    
    const tracks = await db.Track.find(
      { likedBy: req.user._id },
      { _id: 0, name: 1, url: 1, thumbnail: 1, isLiked: 1   },
    );

    res.status(200).send({ message: 'Liked tracks', tracks });
  } catch (err) {
    next(err);
  }
}

async function likeTrack(req, res, next) {
  try{
    const id = req.params['id'];
    const userId = req.user._id

    const updateLike = await db.Track.findOneAndUpdate({
      _id: id
    }, [{
        $set: {
          likedBy: {
            $cond: {
              if: { $in: [userId, "$likedBy"] },
              then: { $setDifference: ["$likedBy", [userId]] },
              else: { $concatArrays: ["$likedBy", [userId]] },
            },
          },
        },
    }
    ])
    res.status(200).send({ message: "hello world", updateLike });
  }catch (err) {
    next(err);
  }
}

module.exports = { upload, edit, getMyTracks, getAllTracks, getLikedTracks, likeTrack, deleteTrack };
