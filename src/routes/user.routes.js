const Router = require('express').Router;
const { userController } = require('../controllers');
const UserRouter = Router();
const { authMiddleware } = require('../middleware');

UserRouter.post('/sign-up', userController.signUp);
UserRouter.get('/sign-out', authMiddleware, userController.signOut);

module.exports = UserRouter;
