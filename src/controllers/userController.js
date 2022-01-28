const { UserRepo } = require('../repositories');

async function signUp(req, res, next) {
  const { email, _id } = req.user;

  const userName = req.user.userName ? req.user.userName : req.body.userName;

  try {
    const foundUser = await UserRepo.findOne({ email: email });

    if (foundUser.error) res.status(400).send({ message: 'User not found' });

    if (foundUser.data) {
      return res
        .status(200)
        .send({ user: foundUser.data, message: 'User logged' });
    }

    const newUser = await UserRepo.create({
      _id: _id,
      email: email,
      userName: userName,
    });

    res.status(201).send({
      user: newUser.data,
      message: 'User created',
    });
  } catch (err) {
    next(err);
  }
}

async function signOut(req, res, next) {
  try {
    res.status(200).send({ message: 'User logged out' });
  } catch (err) {
    next(err);
  }
}

module.exports = { signUp, signOut };
