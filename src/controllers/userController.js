const db = require('../models');

async function login(req, res, next) {
    const { email, password } = req.body;
    try{
        const User = await db.User.findOne({ email: email, password: password}).select().lean().exec();
        console.log(User);

        res.status(200).send({
            message:"user exists",
            user: User
        })
    }catch(error){
        next(error);
    }
}

async function register(req, res, next) {
    try{

    }catch(error){
        next(error);
    }
}

module.exports = { 
    login,
    register
}