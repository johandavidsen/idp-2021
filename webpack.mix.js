let mix = require('laravel-mix');

mix.copy( 'node_modules/webslides/static', 'public')
    .setPublicPath('public');