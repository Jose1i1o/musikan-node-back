const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String, trim: true },
  rating: { type: Number },
  url: { type: String },
  // popularity:{type:String},
  thumbnail: { type: String },
  //   createdAt: { type: ZonedDateTime },
  //   released: { type: ZonedDateTime },
  duration: { type: Number },
  color: { type: String },
  userId: { type: String },
  // genre: { id: String, name: String },
  // albums: [albumId: String],
  liked: { type: Boolean }
});

const TrackModel = new mongoose.model('tracks', TrackSchema);

module.exports = TrackModel;
