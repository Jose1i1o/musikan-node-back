const { verifyIdToken } = require('../services/auth/auth-provider');

async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization.slice(7);

  try {
    const verifiedToken = await verifyIdToken(token);
    if (verifiedToken) {
      next();
    }
  } catch (err) {
    res.status(401).send({ message: 'You are not authorized' });
  }
}

module.exports = { authMiddleware };
