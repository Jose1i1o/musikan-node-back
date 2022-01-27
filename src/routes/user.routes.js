const Router = require('express').Router;
const { userController } = require('../controllers');
const UserRouter = Router();
const { authMiddleware } = require('../middleware');

// UserRouter.get('/login', userController.login);
// UserRouter.post('/register', userController.register);
UserRouter.post('/sign-up', authMiddleware, userController.signUp);
UserRouter.put('/update', userController.updateUser);

module.exports = UserRouter;
