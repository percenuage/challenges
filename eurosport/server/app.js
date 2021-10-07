'use strict';

/* ---------- MODULE DEPENDENCIES ---------- */

const Express = require('express');
const Morgan = require('morgan');

/* ---------- ROUTES ---------- */

const PlayerRoute = require('./api/player/player.route');

/* ---------- APPLICATION ---------- */

let app = Express();

/* ---------- CONFIGURATIONS ---------- */

app.use(Morgan('dev'));
app.use('/players', PlayerRoute);
app.use('/', (req, res) => res.send("Hi Eurosport ^^"));

/* ---------- START ---------- */

const {PORT} = process.env;
let server = app.listen(PORT || 3000, () => console.info(`Server listening @ localhost:${PORT || 3000}`));

/* ---------- MODULE EXPORTS ---------- */

module.exports = app;
