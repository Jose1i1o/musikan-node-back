const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      unique: true,
      trim: true,
    },
    popularity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const GenreModel = new mongoose.model('genre', GenreSchema);

module.exports = GenreModel;
