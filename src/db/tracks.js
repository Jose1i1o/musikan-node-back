const db = require("../models");
const mongoose = require('mongoose');


async function getBaseTracks() {
  let { _id: userId } = await db.User.findOne({}, { _id: 1 }).lean();
//   let { _id: genre } = await db.Genre.findOne({}, { _id: 1 }).lean();
  return [
    {
      _id: mongoose.Types.ObjectId(),
      name: "Song 1",
      artist: "Artist 1",
      rating: 5,
      url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
      thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
      duration: 140,
      color: "#fbdc00",
      likedBy: [userId]
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: "Song 2",
        artist: "Artist 2",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
          likedBy: [userId]
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: "Song 3",
        artist: "Artist 3",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
          likedBy: [userId]
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: "Song 4",
        artist: "Artist 4",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
          likedBy: [userId]
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: "Song 5",
        artist: "Artist 5",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
          likedBy: [userId]
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: "Song 6",
        artist: "Artist 6",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
          likedBy: [userId]
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: "Song 7",
        artist: "Artist 7",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
          likedBy: [userId]
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: "Song 8",
        artist: "Artist 8",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
          likedBy: [userId]
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: "Song 9",
        artist: "Artist 9",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
          likedBy: [userId]
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: "Song 10",
        artist: "Artist 10",
        rating: 5,
        url: "https://res.cloudinary.com/dz5nspe7f/video/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.mp3",
        thumbnail: "https://res.cloudinary.com/dz5nspe7f/image/upload/v1632147267/music-uploads/bensound-creativeminds_vjqm2b.jpg",
        duration: 140,
        color: "#fbdc00",
          likedBy: [userId]
    },
  ];
}

module.exports = { getBaseTracks };
