'use strict';

const Request = require('request-promise-native');

const CURRENCIES = ['BGN','NZD','ILS','RUB','CAD','USD','PHP','CHF','AUD','JPY','TRY','HKD','MYR','HRK','CZK','IDR','DKK','NOK','HUF','GBP','MXN','THB','ISK','ZAR','BRL','SGD','PLN','INR','KRW','RON','CNY','SEK','EUR'];
const REGEX_DATE = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const MIN_DATE = '1999-01-01';

class CurrencyService {

    static async compute(params) {
        const {base_currency, quote_currency, value, date} = params;
        let api = '/';
        if (date) {
            this.check('/history', params);
            api += date;
        } else {
            this.check('/latest', params);
            api += 'latest';
        }
        let res = await Request({
            uri: 'https://' + process.env.CURRENCY_API + api,
            qs: {base: base_currency, symbols: quote_currency},
            json: true,
        });
        const rate = res.rates[quote_currency]
        return {...params, value: parseInt(value), rate, total: rate * value};
    }

    static check(api, params) {
        let errorMessage = '';
        if (!params.base_currency || !CURRENCIES.includes(params.base_currency)) {
            errorMessage += `'base_currency' [${params.base_currency}] is not supported or undefined!\n`;
        }
        if (!params.quote_currency || !CURRENCIES.includes(params.quote_currency)) {
            errorMessage += `'quote_currency' [${params.quote_currency}] is not supported or undefined!\n`;
        }
        if (isNaN(params.value)) {
            errorMessage += `'value' [${params.value}] is not a number or undefined!\n`;
        }
        if (api === '/history' && (!params.date || !params.date.match(REGEX_DATE)
            || Date.parse(params.date) <= Date.parse(MIN_DATE) || Date.parse(params.date) > Date.now())) {
            const today = new Date().toISOString().split('T')[0];
            errorMessage += `'date' [${params.date}] must be defined like 'YYYY-MM-DD', between ${MIN_DATE} and ${today}!`;
        }
        if (errorMessage) {
            let err = new Error(errorMessage);
            err.statusCode = 400;
            throw err;
        }
    }
}

module.exports = CurrencyService;