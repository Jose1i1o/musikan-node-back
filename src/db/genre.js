const mongoose = require('mongoose');

function getBaseGenres() {
    return [
      {
        _id: mongoose.Types.ObjectId(),
        name: "blues",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "rock",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "pop",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "soul",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "funk",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "folk",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "tango",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "indie",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "metal",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "classical",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "country",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "electronic",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "lounge",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "grunge",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "jazz",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "techno",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "rap",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "cumbia",
      },
      {
        _id: mongoose.Types.ObjectId(),
        name: "other",
      },
    ];
  }
  
  module.exports = { getBaseGenres };