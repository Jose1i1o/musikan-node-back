const { GenreRepo } = require('../repositories');

async function getGenres(req, res, next) {
  try {
    const genres = await GenreRepo.find();

    if (genres.error)
      return res.status(400).send({ error: 'Error loading genres' });

    if (genres.data) {
      return res
        .status(200)
        .send({ success: 'Genres loaded', data: genres.data });
    }

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { getGenres };
