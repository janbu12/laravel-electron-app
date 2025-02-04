import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js', // Sesuaikan dengan entry point Anda
            ],
            refresh: true,
        }),
    ],
    server: {
        historyApiFallback: true,
    },
    build: {
        outDir: 'public/build', // Folder output untuk file statis
    },
});
