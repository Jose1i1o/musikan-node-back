const db = require('../models');
const { cloudinary } = require('../services/cloudinary');
const fs = require('fs');
const path = require('path');

const { DEFAULT_PROFILE_IMAGE } = require('../utils/defaults');

async function getUserProfile(req, res, next) {
    try {

    } catch (error) {
        res.status(500).send({ 
            error: error.message,
        })
        next(error);
    }
}
