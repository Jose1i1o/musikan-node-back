const TrackRepository = require('./trackRepository');
const UserRepository = require('./userRepository');
const PlaylistRepository = require('./playlistRepository');

module.exports = {
  UserRepo: UserRepository,
  TrackRepo: TrackRepository,
  PlaylistRepo: PlaylistRepository,
};
