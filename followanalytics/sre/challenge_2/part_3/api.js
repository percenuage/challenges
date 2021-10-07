const path = require('path');
const express = require('express');
const _ = require('lodash');
const configs = require('../common/configs');

class Api {
    static serve() {
        const app = express();

        this.data = require(path.resolve(configs.jsonPath2));

        app.use('/api/logs', this.apiRoute);

        app.listen(configs.port, () => console.info('Server is listening @ ' + configs.port));
        return app;
    }

    static apiRoute(req, res) {
        const {iso_code, date} = req.query;
        res.json(this.generateCountResponse(iso_code, date));
    }

    static generateCountResponse(iso_code, date) {
        const count = _.filter(this.data.logs, {iso_code, date}).length;
        return {country: iso_code, date, count};
    }
}

module.exports = Api;