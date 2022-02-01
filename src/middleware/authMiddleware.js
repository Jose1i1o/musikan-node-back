const { verifyIdToken } = require('../services/auth/auth-provider');

async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization.slice(7);
  // console.log(token);
  try {
    const verifiedToken = await verifyIdToken(token);

    if (verifiedToken) {
      const { uid, email, firebase } = verifiedToken;
      req.user = {
        _id: uid,
        email: email,
        provider: firebase.sign_in_provider,
      };

      if (firebase.sign_in_provider !== 'password') {
        const { name } = verifiedToken;
        req.user.userName = name;
      }

      next();
    }
  } catch (err) {
    res.status(401).send({ message: 'You are not authorized' });
  }
}

module.exports = { authMiddleware };
