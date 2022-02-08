const mongoose = require('mongoose');

function getBaseGenres() {
    return [
      {
<<<<<<< Updated upstream
        _id: "1",
        name: "blues",
      },
      {
        _id: "2",
        name: "rock",
      },
      {
        _id: "3",
        name: "pop",
      },
      {
        _id: "4",
        name: "soul",
      },
      {
        _id: "5",
        name: "funk",
      },
      {
        _id: "6",
        name: "folk",
      },
      {
        _id: "7",
        name: "tango",
      },
      {
        _id: "8",
        name: "indie",
      },
      {
        _id: "9",
        name: "metal",
      },
      {
        _id: "10",
        name: "classical",
      },
      {
        _id: "11",
        name: "country",
      },
      {
        _id: "12",
        name: "electronic",
      },
      {
        _id: "13",
        name: "lounge",
      },
      {
        _id: "14",
        name: "grunge",
      },
      {
        _id: "15",
        name: "jazz",
      },
      {
        _id: "16",
        name: "techno",
      },
      {
        _id: "17",
        name: "rap",
      },
      {
        _id: "18",
        name: "cumbia",
      },
      {
        _id: "19",
=======
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
>>>>>>> Stashed changes
        name: "other",
      },
    ];
  }
  
  module.exports = { getBaseGenres };