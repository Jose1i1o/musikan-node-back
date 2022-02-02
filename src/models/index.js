const UserModel = require('./userModel');
const TrackModel = require('./trackModel');
const GenreModel = require('./genreModel');

module.exports = {
  User: UserModel,
  Track: TrackModel,
  Genre: GenreModel,
};
