'use strict';

/* ---------- MODULE DEPENDENCIES ---------- */

const Express = require('express');
const Helmet = require('helmet');
const Morgan = require('morgan');

/* ---------- APPLICATION ---------- */

let app = Express();

/* ---------- ROUTES ---------- */

const API_ROOT = '/api';

const CurrencyRoute = require('./api/currency/currency.route');

/* ---------- CONFIGURATIONS ---------- */

const Middleware = require('./middleware');

app.set('trust proxy', true);

app.use(Helmet());
app.use(Morgan(process.env.MORGAN_LOG));
app.use(Express.static('./client'));

app.use(API_ROOT + '/currencies', CurrencyRoute);

app.use(Middleware.errorHandler);

/* ---------- START ---------- */

app.start = (port, host) => {
    const {NODE_ENV} = process.env;
    return new Promise(resolve => {
        let server = app.listen(port, host, () => {
            console.info(`[${NODE_ENV}] Server listening @ ${host}:${port}`);
            resolve(server);
        })
    });
};

/* ---------- MODULE EXPORTS ---------- */

module.exports = app;
