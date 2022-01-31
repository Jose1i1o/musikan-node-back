const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    popularity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const GenreModel = new mongoose.model('genres', GenreSchema);

module.exports = GenreModel;
