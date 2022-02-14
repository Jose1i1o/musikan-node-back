const app = require('./server');
const express = require('express');
const { CONFIG } = require('./config/config');
const connect = require('./db/connect');
const {
  seedTracks,
  seedPlaylist,
  seedGenres,
  seedUsers,
} = require('./db/seed');

connect().then(async function onServerInit() {
  CONFIG.development.logger.info(`DB connected`);
  // await seedTracks();
  // await seedPlaylist();
  // await seedGenres();
  // await seedUsers();
});

// port
app.listen(5000, '0.0.0.0', () => {
  CONFIG.development.logger.info(
    `Server running at ${CONFIG.development.app.PORT}`
  );
});
