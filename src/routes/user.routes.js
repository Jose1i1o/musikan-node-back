const Router = require('express').Router;
const { userController } = require('../controllers');
const UserRouter = Router();
const { authMiddleware } = require('../middleware');
const upload = require('../utils/multer');
const { cloudinary } = require('../services/cloudinary');

UserRouter.post('/sign-up', authMiddleware, userController.signUp);
UserRouter.get('/sign-out', authMiddleware, userController.signOut);
UserRouter.post(
  '/update-avatar',
  authMiddleware,
  upload.single('profilePicture'),
  userController.updateAvatar
);
UserRouter.patch('/update', authMiddleware, userController.updateUser);

module.exports = UserRouter;
