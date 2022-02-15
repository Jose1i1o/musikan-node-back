const Router = require('express').Router;
const { userController } = require('../controllers');
const UserRouter = Router();
const { authMiddleware } = require('../middleware');
const { multerImage } = require('../utils/multer');

UserRouter.post('/sign-up', authMiddleware, userController.signUp);
UserRouter.get('/sign-out', authMiddleware, userController.signOut);
UserRouter.post(
  '/update-avatar',
  multerImage.single('profilePicture'),
  userController.updateAvatar
);
UserRouter.patch('/update', userController.updateUser);

UserRouter.get('/:id', userController.getUser);
UserRouter.get('/', userController.getAllUsers);

UserRouter.get('/:id/tracks', userController.getUserTracks);
UserRouter.get('/:id/playlist', userController.getUserPlaylist);

module.exports = UserRouter;
