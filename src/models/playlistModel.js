const mongoose = require('mongoose');
const validator = require('validator');

const playlistSchema = new Schema(
    {

    }
);

const playlistModel = new mongoose.Model('playlist', playlistSchema);

module.exports = playlistModel;