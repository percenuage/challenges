const fs = require('fs');
const path = require('path');
const axios = require('axios');
const promise = require("bluebird");
const configs = require('../common/configs');

class Localizer {
    static async update() {
        const logs = require(path.resolve(configs.jsonPath1)).logs;
        const countryCodes = await this.getCountryCodesFromLogs(logs);
        logs.forEach((log, index) => log.iso_code = countryCodes[index] || '');
        this.write(configs.jsonPath2, {logs});
    }

    static getCountryCodesFromLogs(logs) {
        let countryCodes = [];
        try {
            countryCodes = promise.map(logs, e => this.getCountryCodeFromIP(e.source_ip), {concurrency: 50});
        } catch (e) {
            console.error('ERR', e);
        }
        return countryCodes;
    }

    static async getCountryCodeFromIP(ip) {
        const res = await axios({
            method: 'get',
            url: `${configs.geoIpServiceUrl}/${ip}`
            // responseType: 'stream'
        });
        return res.data.Data.Country.IsoCode;
    }

    static write(filepath, data) {
        const outstream = fs.createWriteStream(path.resolve(filepath));
        outstream.write(JSON.stringify(data, null, 2));
    }
}

module.exports = Localizer;