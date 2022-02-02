const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    popularity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const GenreModel = new mongoose.model('genre', GenreSchema);

module.exports = GenreModel;
