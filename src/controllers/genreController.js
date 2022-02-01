const db = require('../models');

async function getGenres(req, res, next) {
  try {
    const genres = await db.Genre.find().select({ name: 1, _id: 0 });

    res.status(200).send(genres);
  } catch (err) {
    next(err);
  }
}

module.exports = { getGenres };
