const db = require('../models');

async function searchTracks(req, res, next) {
    try {
        const searchText = req.query?.q;
        // const userId = req.headers._id;

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
            }
            ).lean();

            const playlists = await db.Playlist.find(
                {
                $or: [
                    { name: { $regex: searchText, $options: 'i' } },
                    { description: { $regex: searchText, $options: 'i' } },
                ],
            }
            ).lean();

            const users = await db.User.find(
                {
                $match: {
                    $or: [
                        { username: { $regex: searchText, $options: 'i' } },
                        { email: { $regex: searchText, $options: 'i' } },
                    ],
                },
            }
            ).lean();

            return res.status(200).json({
                tracks,
                playlists,
                users,
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