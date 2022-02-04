const db = require('../models');
const { TrackRepo } = require('../repositories');

const { cloudinary } = require('../services/cloudinary');
const { getPublicId } = require('../utils/cloudinaryUtils');

async function createPlaylist(req, res, next) {
    try {
        console.log('Creating playlist');
        res.status(201).send({ message: 'Playlist created' });
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