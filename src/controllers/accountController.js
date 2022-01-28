const db = require('../models');
const { cloudinary } = require('../services/cloudinary');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const asyncWriteFile = promisify(fs.writeFile);
const { getPublicId } = require('../utils/cloudinaryUtils');


const { DEFAULT_PROFILE_IMAGE } = require('../utils/defaults');

async function updateUserProfile(req, res, next) {
    try{
        const id = req.params['id'];
        const { email, firstName, lastName} = req.body;
        const mainImage = req.body.profilePicture;
        // console.log(mainImage);

        if(mainImage) {
            var uploadImage = await cloudinary.uploader.upload(
                mainImage, {
                    upload_preset: 'user-profile-pictures',
                    folder: 'user-profile-pictures',
                }
            );
            }else{
                console.log('No image uploaded');
            }
            // console.log(uploadImage);
        const user = await db.User.findByIdAndUpdate(
            id,
            {
                $set: {
                    email: email,
                    firstName: firstName ? firstName : '',
                    lastName: lastName ? lastName : '',
                    profilePicture: uploadImage.url,
                },
            },
            { new: true,
            },
        );
        console.log(user);
        res.status(200).send({
            message: 'User profile updated',
            user: user,
        });
    } catch (error) {
        res.status(500).send({
            error: error.message,
        });
    }
}

            // {
            //     upload_preset: 'ml_default',
            //     resource_type: 'image',
            //     eager: [
            //         {
            //             width: 250,
            //             height: 250,
            //             crop: 'fill',
            //             gravity: 'face',
            //             radius: 20,
            //             effect: 'sepia',
            //         },
            //     ],
            //     });

module.exports = {
    updateUserProfile,
};

        // const user = await db.User.findById(id);
        // if (!user) {
        //     return res.status(404).send({
        //         message: 'User not found',
        //     });
        // }

    // let newImageFile = req.files['profilePicture'];
    // let defaultProfileImage = false;
    // let urlProfileImage = profilePicture;
    //     console.log('before first if');
    //     if (profilePicture === DEFAULT_PROFILE_IMAGE) {
    //         defaultProfileImage = true;
    //         console.log('inside first if');
    //         return;
    //     }
    //     //  profilePicture.split("/")[profilePicture.split("/").length - 1] + Date.now(),
        
    //     else if (newImageFile) {
    //     console.log('inside second if');
    //     profilePicture = profilePicture[0];
    //     const pathLocation = path.join(
    //         __dirname,
    //         '../../images/profile-pictures/',
    //         profilePicture,
    //     );
    //     await asyncWriteFile(pathLocation, newImageFile.data);
        
    //     // cloudinary upload
    //     const { url } = await cloudinary.uploader.upload(
    //         pathLocation,
    //         {
    //             resource_type: 'image',
    //             eager: [
    //                 {
    //                     width: 250,
    //                     height: 250,
    //                     crop: 'fill',
    //                     gravity: 'face',
    //                     radius: 20,
    //                     effect: 'sepia',
    //                     },
    //             ],
    //         },
    //     );
    //     urlProfileImage = url.secure_url;

    //     // delete old image
    //     if (!defaultProfileImage) {
    //         const { public_id } = getPublicId(profilePicture);
    //         await cloudinary.uploader
    //         .destroy(
    //             profilePicture.public_id,
    //         )
    //         .catch(err => console.log(err));
    //     }
    //     // delete on system once it is uploaded to cloudinary
    //     await fs.unlinkSync(pathLocation, (err) => {
    //         if (err) {
    //             console.log(err);   // handle the error
    //         }
    //     });
    //     return;
    //     } else (err) => {
    //         console.log(err);
    //     }
    //     const updatedProfile = await db.UserModel.findOneAndUpdate(
    //     {
    //         id: id,
    //     },
    //     {
    //         $set: {
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email,
    //             profilePicture: urlProfileImage
    //         },
    //     },
    //     {
    //         new: true,
    //     },
    // );
//     res.status(200).send({
//         message: 'User updated',
//         id: updatedProfile.id,
//         data: updatedProfile,
//     });
//     } catch (error) {
//         res.status(500).send({
//             message: error.message,
//         });
//     }
// }