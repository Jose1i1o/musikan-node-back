const Router = require('express').Router;
const { userController } = require('../controllers');
const UserRouter = Router();
const { authMiddleware } = require('../middleware');
const { multerImage } = require('../utils/multer');

UserRouter.post('/sign-up', authMiddleware, userController.signUp);
UserRouter.get('/sign-out', authMiddleware, userController.signOut);
UserRouter.post(
  '/update-avatar',
  authMiddleware,
  multerImage.single('profilePicture'),
  userController.updateAvatar
);
UserRouter.patch('/update', authMiddleware, userController.updateUser);

module.exports = UserRouter;
