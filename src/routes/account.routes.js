const Router = require('express').Router;
const { accountController } = require('../controllers');
const multer = require('multer');
const AccountRouter = Router();


const upload = multer();

AccountRouter.put(
    '/',
    upload.single('avatar'),
    accountController.updateProfile
);


module.exports = AccountRouter;