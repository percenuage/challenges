const Parser = require('./parser');

(async () => {
    console.time('parse');
    await Parser.parse();
    console.timeEnd('parse');
})();
