import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['assets/css/style.css',
                'assets/css/components.css',
                'node_modules/jqvmap/jqvmap/jqvmap.css',
                'node_modules/weathericons/css/weather-icons.css',
                'node_modules/weathericons/css/weather-icons-wind.css',
                'node_modules/summernote/dist/summernote-bs4.css',

                'assets/js/stisla.js',
                'assets/js/scripts.js',
                'assets/js/custom.js',
                'node_modules/simpleweather/jquery.simpleWeather.js',
                'node_modules/chart.js/dist/chart.umd.js',
                'node_modules/jqvmap/jqvmap/jquery.vmap.js',
                'node_modules/jqvmap/jqvmap/maps/jquery.vmap.world.js',
                'node_modules/summernote/dist/summernote-bs4.js',
                'node_modules/chocolat/dist/js/chocolat.js',
                'public/assets/js/page/index-0.js'

            ],
            refresh: true,
        }),
    ],
});
