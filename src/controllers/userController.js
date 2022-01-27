const { UserRepo } = require('../repositories');

async function signUp(req, res, next) {
  const { email, _id } = req.user;

  try {
    const foundUser = await UserRepo.findOne({ email: email });

    if (foundUser.error) res.status(400).send({ message: 'User not found' });

    if (foundUser.data)
      res.status(200).send({ user: foundUser, message: 'User logged' });

    const newUser = await UserRepo.create({ _id: _id, email: email });
    res.status(201).send({
      data: newUser,
      message: 'User created',
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { signUp };
