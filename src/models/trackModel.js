const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema(
  {
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
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'tracks' },
    // albums: [albumId: String],
    // likedBy: [userId: String]
  },
  { timestamps: true }
);

const TrackModel = new mongoose.model('tracks', TrackSchema);

module.exports = TrackModel;
