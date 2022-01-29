const { verifyIdToken } = require('../services/auth/auth-provider');

async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization.slice(7);
  try {
    const verifiedToken = await verifyIdToken(token);

    if (verifiedToken) {
      if (verifiedToken.firebase.sign_in_provider === 'password') {
        const { uid, email } = verifiedToken;

        req.user = {
          _id: uid,
          email: email,
        };
      } else {
        const { uid, email, name } = verifiedToken;

        req.user = {
          _id: uid,
          email: email,
          userName: name,
        };
      }

      next();
    }
  } catch (err) {
    res.status(401).send({ message: 'You are not authorized' });
  }
}

module.exports = { authMiddleware };
