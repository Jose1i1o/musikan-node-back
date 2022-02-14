const db = require('../models');

async function searchTracks(req, res, next) {
    try {
        const searchText = req.query?.q;

        if (!searchText) {
            return res.status(400).json({
                message: 'Search text is required',
            });
        }
        if(searchText.length < 3) {
            return res.status(400).json({
                message: 'Search text must be at least 3 characters long',
            });
        }
        if(searchText) {
            const tracks = await db.Track.find(
                {
                $or: [
                    { name: { $regex: searchText, $options: 'i' } }, // i = case insensitive
                    { genre: { $regex: searchText, $options: 'i' } },
                ],
                },
                {
                    name: 1,
                    url: 1,
                    thumbnail: 1,
                    genre: 1,
                    likedBy: 1,
                },
            ).lean();

            const playlists = await db.Playlist.find(
                {
                $or: [
                    { name: { $regex: searchText, $options: 'i' } },
                    { description: { $regex: searchText, $options: 'i' } },
                ],
                },
                {
                name: 1,
                description: 1,
                thumbnail: 1,
                publicAccessible: 1,
                followedBy: 1,
                }
            ).lean();

            // return those users that match their userName field only

            const users = await db.User.find(
                {
                $or: [
                    { userName: { $regex: searchText, $options: 'i' } },
                ],
                },
                {
                userName: 1,
                thumbnail: 1,
                }
            ).lean();

            return res.status(200).json({
                users,
                playlists,
                tracks,
            });
        }
        next();
    } catch (error) {
        res.status(500).send({
          error: error.message,
        });
        next(error);
      }
}

module.exports = {
    searchTracks,
}