const db = require('../models');
const mongoose = require('mongoose');

async function getBaseTracks() {
  let userId = await db.User.find({}, { _id: 1 }).lean();
  let genreId = await db.Genre.find({}, { _id: 1 }).lean();
  return [
    {
      _id: "1",
      name: "Song 1",
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644523019/tracks/track-1644523017728_qb6wq4.mp3',
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),
    },
    {
      _id: '2',
      name: 'Song 2',
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644575285/tracks/0011756_jypul7.mp3',
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),
    },
    {
      _id: '3',
      name: 'Song 3',
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644575285/tracks/0011756_jypul7.mp3',
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),
    },
    {
      _id: '4',
      name: 'Song 4',
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644575284/tracks/0008721_bvwmua.mp3',
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),
    },
    {
      _id: '5',
      name: 'Song 5',
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644575284/tracks/0008721_bvwmua.mp3',
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),
    },
    {
      _id: '6',
      name: 'Song 6',
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644575285/tracks/0012691_ptpbya.mp3',
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),
    },
    {
      _id: '7',
      name: 'Song 7',
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644575285/tracks/0012691_ptpbya.mp3',
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),
    },
    {
      _id: '8',
      name: 'Song 8',
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644575285/tracks/0011756_jypul7.mp3',
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),
    },
    {
      _id: '9',
      name: 'Song 9',
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644575285/tracks/0011756_jypul7.mp3',
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),
    },
    {
      _id: '10',
      name: 'Song 10',
      // userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      thumbnail: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg',
      url: 'https://res.cloudinary.com/dmkdsujzh/video/upload/v1644523019/tracks/track-1644523017728_qb6wq4.mp3',
      userId: userId[Math.ceil(Math.random() * userId.length) - 1]._id,
      // make an equal random distribution between the userId and the userId.length
      genre: genreId[Math.ceil(Math.random() * genreId.length) - 1]._id,
      likedBy: userId.map(user => user._id),

    },
  ];
}

module.exports = { getBaseTracks };
