let mix = require('laravel-mix');

mix
    .js('./src/scripts/main.js', './public/js')
    .sass('./src/styles/scss/main.scss', './public/css')
    .sass('./src/styles/scss/login02.scss', './public/css')
    .options({
        processCssUrls: false,
    })
    .copy('./src/img', './public/img');


if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
};
