const Localizer = require('./localizer');

(async () => {
    console.time('localize');
    await Localizer.update();
    console.timeEnd('localize');
})();
