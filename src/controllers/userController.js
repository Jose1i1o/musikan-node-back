const db = require('../models');

async function login(req, res, next) {
  const { email } = req.body;
  try {
    const foundUser = await db.User.findOne({
      email: email,
    })
      .select()
      .lean()
      .exec();

    res.status(200).send({
      message: 'user exists',
      user: foundUser,
    });
  } catch (error) {
    next(error);
  }
}

async function register(req, res, next) {
  const { email, password } = req.body;

  try {
    const newUser = await db.User.create({
      email: email,
      password: password,
    });

    res.status(201).send({
      message: 'created user',
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login: login,
  register: register,
};
