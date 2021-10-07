const fs = require('fs');
const readLine = require('readline');
const _ = require('lodash');
const configs = require('../common/configs');

class Parser {
    static parse() {
        return new Promise(resolve => {
            const instream = fs.createReadStream(configs.logPath);
            const outstream = fs.createWriteStream(configs.jsonPath1);
            const rl = readLine.createInterface(instream);
            const logs = [];
            rl.on('line', line => logs.push(this.parseLine(line)));
            rl.on('close', () => {
                outstream.write(JSON.stringify({logs}, null, 2));
                resolve();
            });
        })
    }

    static parseLine(line) {
        const values = line.split(',');
        values[5] = parseInt(values[5]);
        return _.zipObject(configs.keys, values);
    }
}

module.exports = Parser;


