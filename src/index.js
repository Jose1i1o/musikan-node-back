const app = require('./server');
const express = require('express');
const { CONFIG } = require('./config/config');
const connect = require('./db/connect');

// connect().then(async function onServerInit() {
//   CONFIG.development.logger.info(`DB connected`);
//   await xxxxx();
// });


// port
// app.listen(CONFIG.development.app.PORT, () => {
//   CONFIG.development.logger.info(
//     `Server running at ${CONFIG.development.app.PORT}`
//   );
// });