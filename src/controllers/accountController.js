const db = require('../models');
const { cloudinary } = require('../services/cloudinary');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const asyncWriteFile = promisify(fs.writeFile);
const { getPublicId } = require('../utils/cloudinaryUtils');


const { DEFAULT_PROFILE_IMAGE } = require('../utils/defaults');
const { get } = require('http');

async function updateUserProfile(req, res, next) {
    try {
        const { _id } = req.user;
        const { firstName, lastName, email } = req.body;
        const { profilePicture } = await db.UserModel.findOne({
            _id: _id,
        },
        { profilePicture: profilePicture },
    );
    let newImageFile = req.files['profilePicture'];
    let defaultProfileImage = false;
    let urlProfileImage = profilePicture;

    if (profilePicture === DEFAULT_PROFILE_IMAGE) {
        defaultProfileImage = true;
        return;
    }
    else if (newImageFile) {
        profilePicture = profilePicture[0];
        const pathLocation = path.join(
            __dirname,
            '../../images/profile-pictures/',
            profilePicture.filename,
        );
        await asyncWriteFile(pathLocation, newImageFile.data);
        
        // cloudinary upload
        const { url } = await cloudinary.uploader.upload(
            pathLocation,
            {
                resource_type: 'image',
                eager: [
                    {
                        width: 250,
                        height: 250,
                        crop: 'fill',
                        gravity: 'face',
                        radius: 20,
                        effect: 'primavera',
                        },
                ],
            },
        );
        urlProfileImage = url.secure_url;

        // delete old image
        if (!defaultProfileImage) {
            const { public_id } = getPublicId(profilePicture);
            await cloudinary.uploader
            .destroy(
                profilePicture.public_id,
            )
            .catch(err => console.log(err));
        }
        // delete on system once it is uploaded to cloudinary
        await fs.unlinkSync(pathLocation, (err) => {
            if (err) {
                console.log(err);   // handle the error
            }
        });
        return;
        } else (err) => {
            console.log(err);
        }
    const updatedProfile = await db.UserModel.findOneAndUpdate(
        {
            _id: _id,
        },
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            profilePicture: urlProfileImage,
        },
        {
            new: true,
        },
    );
    res.status(200).send({
        message: 'User updated',
        updatedProfile,
    });
    } catch (error) {
        res.status(500).send({
            message: 'User not updated',
        });
    }
}

module.exports = { 
    updateUserProfile: updateUserProfile,
};