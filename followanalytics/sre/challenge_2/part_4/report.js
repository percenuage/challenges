const fs = require('fs');
const path = require('path');
const csv = require('csv-stringify');
const configs = require('../common/configs');
const Api = require('../part_3/api');

class Report {
    static serve() {
        const app = Api.serve();
        app.use('/api/report', async (req, res) => {
            const {iso_code, date} = req.query;
            const csvpath = await this.generateReport(iso_code, date);
            res.download(csvpath);
        });
        return app;
    }

    static generateReport(iso_code, date) {
        return new Promise((resolve, reject) => {
            const data = Api.generateCountResponse(iso_code, date);
            const report = {
                iso_code: data.country,
                date: data.date,
                number_of_logs: data.count,
                p95: 0
            };
            const options = {delimiter: ',', header: true};
            csv([report], options, (err, output) => {
                if (err) {
                    reject(err);
                }
                const outstream = fs.createWriteStream(path.resolve(configs.csvPath));
                outstream.on('finish', () => resolve(configs.csvPath));
                outstream.write(output);
                outstream.end();
            })
        })
    }
}

module.exports = Report;