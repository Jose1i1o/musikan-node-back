const UserModel = require('./userModel');
const TrackModel = require('./trackModel');
const GenreModel = require('./genreModel');
const PlaylistModel = require('./playlistModel');

module.exports = {
  User: UserModel,
  Track: TrackModel,
  Genre: GenreModel,
  Playlist: PlaylistModel,
};
