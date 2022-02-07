const mongoose = require('mongoose');

function getBaseUsers() {
    return [
      {
        _id: mongoose.Types.ObjectId(),
        userName: 'Carlos Velilla Fernández',
        email: 'carlosvelillaf@gmail.com',
        profilePicture: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1643490459/user-profile-pictures/dfb31411f10167c1a6b59fcb908637d1_vtdpbs.jpg',
        password: "123456"
      },
      {
        _id: mongoose.Types.ObjectId(),
        userName: 'Antonio Copete',
        email: 'antonio@gmail.com',
        profilePicture: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644163122/user-profile-pictures/980784dbf2d79c6a9e58c0822cc0906c_hu0rss.png',
      },
      {
        _id: mongoose.Types.ObjectId(),
        userName: 'Jose Valenzuela',
        email: 'jose@gmail.com',
        profilePicture: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644227125/user-profile-pictures/537f12c9e9f12b280144f3eddf2f6413_bit5cc.jpg',
        password: "123456"

    },
      {
        _id: mongoose.Types.ObjectId(),
        userName: 'Arantza Kitt',
        email: 'arantza.beitia@gmail.com',
        profilePicture: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1643549757/user-profile-pictures/5ea610251ee70b49ccd294adbd292f61_ljxlcm.jpg',
      },
    ];
  }
  
  module.exports = { getBaseUsers };