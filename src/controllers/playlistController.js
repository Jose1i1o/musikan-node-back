const { Playlist } = require('../models');
const db = require('../models');
const { UserRepo, PlayListRepository } = require('../repositories');

const { cloudinary } = require('../services/cloudinary');
const { getPublicId } = require('../utils/cloudinaryUtils');

function getPlaylists(ListOfPlaylists) {
    const playlist = ListOfPlaylists.map((playlist, index) => {
        const { _id, name, description, thumbnail, publicAccessible } = playlist;
        const playlistObj = {
            _id,
            name,
            description,
            thumbnail,
            publicAccessible,
        };
        return playlistObj;
    });
    return playlist;
}

async function createPlaylist(req, res, next) {
    try {
        const { _id } = req.user;
        const findUser = await UserRepo.findOne({ _id });
        const playlistData = {};
        
        if (findUser.error) {
            return res.status(400).send({ error: 'The user has not been found, please try again' });
        }
        
        if (findUser.data) {
            const { name, description, publicAccessible } = req.body;
            const thumbnailPicture = await cloudinary.uploader.upload(req.files.thumbnail[0].path,
                {
                  resource_type: 'image',
                  folder: 'playlists',
                });
            playlistData.userId = findUser.data._id;
            playlistData.name = name;
            playlistData.description = description;
            playlistData.thumbnail = thumbnailPicture.secure_url;
            playlistData.publicAccessible = publicAccessible;
        }
        const newPlaylist = await db.Playlist.create(playlistData);
        console.log('newPlaylist', newPlaylist);

        if (newPlaylist.error) {
            console.log('newPlaylist.error', newPlaylist.error);
            res.status(400).send({ error: 'Error updating your track' });
            return;
        }
        if (newPlaylist.data) {
            console.log('newPlaylist.error', newPlaylist.data);
          const updatedPlaylists = await db.Playlist.find({ userId: req.user._id });
          const playlists = getPlaylists(updatedPlaylists.data);
          
          res.status(200).send({
            success: `Playlist ${updatedPlaylists.data.name} updated`,
            data: playlists,
          });
          return;
        }
        next();
    } catch (error) {
        res.status(400).send({ error: 'Error creating playlist' });
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