const mongoose = require('mongoose');

function getBaseGenres() {
    return [
      {
        _id: mongoose.Schema.Types.String,
        name: "blues",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "rock",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "pop",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "soul",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "funk",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "folk",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "tango",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "indie",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "metal",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "classical",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "country",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "electronic",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "lounge",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "grunge",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "jazz",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "techno",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "rap",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "cumbia",
      },
      {
        _id: mongoose.Schema.Types.String,
        name: "other",
      },
    ];
  }
  
  module.exports = { getBaseGenres };