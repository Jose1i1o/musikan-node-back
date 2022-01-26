const db = require('../models');

async function login(req, res, next) {
  const { email } = req.body;
  try {
    await db.User.findOne({
      email: email,
    })
      .select()
      .lean()
      .exec();

    res.status(200).send({
      message: 'Logged in',
    });
  } catch (error) {
    res.status(500).send({
      message: 'User not authorized',
    });
  }
}

async function register(req, res, next) {
  const { email } = req.body;

  try {
    await db.User.create({
      email: email,
    });

    res.status(201).send({
      message: 'User created',
    });
  } catch (error) {
    res.status(500).send({
      message: 'The email already exist. Please use a different email',
    });
  }
}

module.exports = {
  login: login,
  register: register,
};
