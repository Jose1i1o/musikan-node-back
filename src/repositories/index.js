const TrackRepository = require('./trackRepository');
const UserRepository = require('./userRepository');
const GenreRepository = require('./genreRepository');
const PlaylistRepository = require('./playlistRepository');

module.exports = {
  UserRepo: UserRepository,
  TrackRepo: TrackRepository,
  GenreRepo: GenreRepository,
  PlaylistRepo: PlaylistRepository,
};
