const Router = require('express').Router;
const { userController } = require('../controllers');
const UserRouter = Router();
const { authMiddleware } = require('../middleware');

UserRouter.post('/sign-up', authMiddleware, userController.signUp);
UserRouter.put('/update', userController.updateUser);
UserRouter.get('/sign-out', authMiddleware, userController.signOut);

module.exports = UserRouter;
