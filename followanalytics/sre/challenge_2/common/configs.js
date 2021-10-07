const DEFAULT_FILEPATH = './common/partial';

module.exports = {
    logPath: `${DEFAULT_FILEPATH}.logs`,
    jsonPath1: `${DEFAULT_FILEPATH}_1.json`,
    jsonPath2: `${DEFAULT_FILEPATH}_2.json`,
    csvPath: `${DEFAULT_FILEPATH}_report.csv`,
    keys: ['type', 'date', 'source_ip', 'response_time', 'target_url', 'http_code'],
    geoIpServiceUrl: process.env.GEOIP_SERVICE_URL || 'http://localhost:3000',
    port: process.env.PORT || 3000,
    header: 'iso_code,data,number_of_logs,p95',
};