const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema(
  {
    _id: { type: String },
    name: {
      type: String,
      trim: true,
      required: [true, 'The name is required'],
    },
    rating: { type: Number },
    url: { type: String },
    // popularity:{type:String},
    thumbnail: { type: String },
    //   createdAt: { type: ZonedDateTime },
    //   released: { type: ZonedDateTime },
    duration: { type: Number },
    color: { type: String },
    userId: [{ type: String, ref: 'users' }],
    genre: { type: mongoose.Schema.Types.String, ref: 'genre' },
    // albums: [albumId: String],
    likedBy: [{ type: String }],
  },
  { timestamps: true }
);

const TrackModel = new mongoose.model('tracks', TrackSchema);

module.exports = TrackModel;
