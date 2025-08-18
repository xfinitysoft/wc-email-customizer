import { defineConfig, splitVendorChunkPlugin } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
export default defineConfig({
    base: "",
    publicDir: false,
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
            'react-final-form': path.resolve(__dirname, './node_modules/react-final-form'),
            '@xfinity': path.resolve(__dirname, './src'),
            '@extensions': path.resolve('./packages/easy-email-extensions/src'),
            '@core': path.resolve('./packages/easy-email-core/src'),
            '@': path.resolve('./packages/easy-email-editor/src'),
            'easy-email-core': path.resolve('./packages/easy-email-core/src/index.tsx'),
            'easy-email-editor/lib/locales.json': path.resolve(
                './packages/easy-email-editor/public/locales.json',
            ),
            'easy-email-localization': path.resolve('./packages/easy-email-localization'),
            'easy-email-editor': path.resolve('./packages/easy-email-editor/src/index.tsx'),
            'easy-email-extensions': path.resolve(
                './packages/easy-email-extensions/src/index.tsx',
            ),
        },
    },
    build: {
        chunkSizeWarningLimit: 6000,
        minify: false,
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    }
                    return `${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
            }
        }
    },
    experimental: {
        renderBuiltUrl(filename: string, { hostType }: { hostType: 'js' | 'css' | 'html' }) {
            if (hostType === 'js') {
                return { runtime: `window.__dynamic_base__(${JSON.stringify(filename)})` }
            } else {
                return { relative: true }
            }
        }
    },
    plugins: [
        reactRefresh(),
        splitVendorChunkPlugin(),
    ].filter(Boolean),
    define: {
        'process.env': {
            'PUBLIC_URL': 'http://localhost:5173/public'
        }
    }
});
