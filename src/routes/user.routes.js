const Router = require('express').Router;
const { userController } = require('../controllers');
const UserRouter = Router();

UserRouter.get('/login', userController.login);


module.exports = UserRouter;