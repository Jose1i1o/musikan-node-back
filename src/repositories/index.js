const TrackRepository = require('./trackRepository');
const UserRepository = require('./userRepository');
const GenreRepository = require('./genreRepository');

module.exports = {
  UserRepo: UserRepository,
  TrackRepo: TrackRepository,
  GenreRepo: GenreRepository,
};
