const mongoose = require('mongoose');

function getBaseUsers() {
    return [
      {
<<<<<<< Updated upstream
        _id: "1",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        userName: 'Carlos Velilla Fernández',
        email: 'carlosvelillaf@gmail.com',
        profilePicture: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1643490459/user-profile-pictures/dfb31411f10167c1a6b59fcb908637d1_vtdpbs.jpg',
      },
      {
<<<<<<< Updated upstream
        _id: "2",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        userName: 'Antonio Copete',
        email: 'antonio@gmail.com',
        profilePicture: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644163122/user-profile-pictures/980784dbf2d79c6a9e58c0822cc0906c_hu0rss.png',
      },
      {
<<<<<<< Updated upstream
        _id: "3",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        userName: 'Jose Valenzuela',
        email: 'jose@gmail.com',
        profilePicture: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644227125/user-profile-pictures/537f12c9e9f12b280144f3eddf2f6413_bit5cc.jpg',

    },
      {
<<<<<<< Updated upstream
        _id: "4",
=======
        _id: mongoose.Schema.Types.String,
>>>>>>> Stashed changes
        userName: 'Arantza Kitt',
        email: 'arantza.beitia@gmail.com',
        profilePicture: 'https://res.cloudinary.com/dmkdsujzh/image/upload/v1643549757/user-profile-pictures/5ea610251ee70b49ccd294adbd292f61_ljxlcm.jpg',
      },
    ];
  }
  
  module.exports = { getBaseUsers };