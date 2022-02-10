const mongoose = require('mongoose');
// const validator = require('validator');

const playlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      // required: [true, 'You need to provide a name for your playlist']
    },
    collaborative: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String, // should be TextBlob instead of String. TextBlob will convert the string to a blob (store it as binary data)
      trim: true,
    },
    thumbnail: {
      // instead of cover for a easier asociation with what we currently have
      type: String,
      trim: true,
    },
    primaryColor: {
      type: String,
      trim: true,
    },
    publicAccessible: {
      type: Boolean,
      default: false,
    },
    numberSongs: {
      type: Number,
      default: 0,
    },
    followers: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 1,
      maxCount: 5,
    },
    userId: [{
      type: String,
      trim: true,
    }],
    tracks: [{ type: String, ref: 'tracks' }],
    followedBy: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Playlist = mongoose.model('playlist', playlistSchema);

module.exports = Playlist;
