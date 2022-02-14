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

app.set('port', CONFIG.development.app.PORT || 4000);

// port
app.listen(app.get('port'), () => {
  CONFIG.development.logger.info(
    `Server running at ${CONFIG.development.app.PORT}`
  );
});
