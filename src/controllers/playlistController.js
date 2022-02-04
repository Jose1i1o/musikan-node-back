const db = require('../models');
const { PlayListRepository } = require('../repositories');

const { cloudinary } = require('../services/cloudinary');
const { getPublicId } = require('../utils/cloudinaryUtils');

async function createPlaylist(req, res, next) {
    try {
        const { userId } = req.user;
        const name = req.body.name;
        console.log(name);
        const playlist = await db.Playlist.create({ name, userId });
        if (playlist.error) {
            return res.status(400).send({ error: 'Error creating your playlist' });
        }
        const updatedPlaylists = await db.Playlist.find({ userId });
        return res.status(200).send({ data: updatedPlaylists });
    }
    catch (err) {
        console.log('err');
    }
}

// async function yourFunction(req, res, next) {
//     try {

//     }
//     catch (err) {
//         next(err);
//     }
// }

module.exports = {
    createPlaylist,
}