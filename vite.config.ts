import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';

// 打包版號
const date = new Date();
const VITE_APP_VERSION = `${date.getFullYear().toString().padStart(4, '0')}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;

// https://vitejs.dev/config/
export default defineConfig({
    base: '/projects-intro/',
    plugins: [
        vue(),
        eslintPlugin({ eslintOptions: { cache: false } }),
        createHtmlPlugin({
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyCSS: true
            }
        })
    ],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
        ]
    },
    server: {
        host: true
    },
    build: {
        chunkSizeWarningLimit: 1024,
        rollupOptions: {
            output: {
                entryFileNames: `js/[name].${VITE_APP_VERSION}.js`,
                chunkFileNames: 'js/[name].[hash].js',
                assetFileNames: 'css/[name].[hash][extname]',
                // eslint-disable-next-line consistent-return
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        }
    }
});
