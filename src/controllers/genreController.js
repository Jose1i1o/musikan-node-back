const db = require('../models');

async function getGenres(req, res, next) {
  try {
    const genres = await db.Genre.find().select({ name: 1, _id: 0 });
    const genreArr = genres.map((genre) => {
      return genre.name;
    });

    res.status(200).send(genreArr);
  } catch (err) {
    next(err);
  }
}

module.exports = { getGenres };
