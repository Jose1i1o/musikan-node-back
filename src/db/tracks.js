const db = require("../models");
const mongoose = require('mongoose');


async function getBaseTracks() {
<<<<<<< Updated upstream
  let { _id: userId } = await db.User.findOne({}, { _id: 1 }).lean();
  console.log(userId);
  let genre = await db.Genre.findOne({}, { _id: 1 }).lean();
  return [
    {
      _id : "1",
=======
  let userId = await db.User.findOne({}, { _id: 1 }).lean();
  let genre = await db.Genre.findOne({}, { _id: 1 }).lean();
  return [
    {
      _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
      name: "Song 1",
      artist: "Artist 1",
      rating: 5,
      url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
      thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
      duration: 140,
      color: "#fbdc00",
      likedBy: [userId],
      genre: genre
    },
    {
<<<<<<< Updated upstream
      _id : "2",
=======
      _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
      name: "Song 2",
      artist: "Artist 2",
      rating: 5,
      url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
      thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
      duration: 140,
      color: "#fbdc00",
      likedBy: [userId],
      genre: genre
    },
    {
<<<<<<< Updated upstream
        _id : "3",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        name: "Song 3",
        artist: "Artist 3",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
        likedBy: [userId],
        genre: genre
    },
    {
<<<<<<< Updated upstream
        _id : "4",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        name: "Song 4",
        artist: "Artist 4",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
        likedBy: [userId],
        genre: genre
    },
    {
<<<<<<< Updated upstream
        _id : "5",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        name: "Song 5",
        artist: "Artist 5",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
        likedBy: [userId],
        genre: genre
    },
    {
<<<<<<< Updated upstream
        _id : "6",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        name: "Song 6",
        artist: "Artist 6",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
        likedBy: [userId],
        genre: genre
    },
    {
<<<<<<< Updated upstream
        _id : "7",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        name: "Song 7",
        artist: "Artist 7",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
        likedBy: [userId],
        genre: genre
    },
    {
<<<<<<< Updated upstream
        _id : "8",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        name: "Song 8",
        artist: "Artist 8",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
        likedBy: [userId],
        genre: genre
    },
    {
<<<<<<< Updated upstream
        _id : "9",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        name: "Song 9",
        artist: "Artist 9",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
        likedBy: [userId],
        genre: genre
    },
    {
<<<<<<< Updated upstream
        _id : "10",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        name: "Song 10",
        artist: "Artist 10",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
        likedBy: [userId],
    },
  ];
}

module.exports = { getBaseTracks };
