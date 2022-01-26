const Router = require('express').Router;
const { userController } = require('../controllers');
const UserRouter = Router();

UserRouter.get('/login', userController.login);
UserRouter.post('/register', userController.register);

module.exports = UserRouter;
