const mongoose = require('mongoose');

function getBaseGenres() {
    return [
      {
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
        name: "other",
      },
      {
        _id: "20",
        name: "piano",
      },
      {
        _id: "21",
        name: "poprock",
      },
      {
        _id: "22",
        name: "chillout",
      },
      {
        _id: "23",
        name: "reggaeton",
      },
      {
        _id: "24",
        name: "alternative",
      },
      {
        _id: "25",
        name: "groovy",
      },
    ];
  }
  
  module.exports = { getBaseGenres };