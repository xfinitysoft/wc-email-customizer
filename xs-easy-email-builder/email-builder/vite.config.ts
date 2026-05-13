import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

/** Built assets go to ../build (same idea as wp-voucher-creator `build/`). */
const pluginRoot = path.resolve(__dirname, '..');

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, __dirname, '');
    /** Browser hits http://localhost:5173/wp-json/... — proxy forwards to your real WP site. */
    const wpOrigin = env.VITE_WP_ORIGIN || 'http://localhost/tester';

    return {
        base: '',
        /** Copies `public/images/` into `build/images/` for extension preset thumbnails. */
        publicDir: 'public',
        resolve: {
            alias: {
                react: path.resolve('./node_modules/react'),
                'react-final-form': path.resolve(__dirname, './node_modules/react-final-form'),
                '@xfinity': path.resolve(__dirname, './src'),
                '@extensions': path.resolve(__dirname, './packages/easy-email-extensions/src'),
                '@core': path.resolve(__dirname, './packages/easy-email-core/src'),
                '@': path.resolve(__dirname, './packages/easy-email-editor/src'),
                'easy-email-core': path.resolve(__dirname, './packages/easy-email-core/src/index.tsx'),
                'easy-email-editor/lib/locales.json': path.resolve(
                    __dirname,
                    './packages/easy-email-editor/public/locales.json',
                ),
                'easy-email-localization': path.resolve(__dirname, './packages/easy-email-localization'),
                'easy-email-editor': path.resolve(__dirname, './packages/easy-email-editor/src/index.tsx'),
                'easy-email-extensions': path.resolve(__dirname, './packages/easy-email-extensions/src/index.tsx'),
            },
        },
        server: {
            proxy: {
                '/wp-json': {
                    target: wpOrigin,
                    changeOrigin: true,
                    secure: false,
                    /** Some stacks drop Authorization; ensure Basic auth reaches WordPress (Application Passwords). */
                    configure: (proxy) => {
                        proxy.on('proxyReq', (proxyReq, req) => {
                            const auth = req.headers.authorization;
                            if (auth) {
                                proxyReq.setHeader('Authorization', auth);
                            }
                        });
                    },
                },
            },
        },
        build: {
            outDir: path.join(pluginRoot, 'build'),
            emptyOutDir: true,
            /** One CSS file — avoids multiple chunks overwriting `css/index.css` (broken layout). */
            cssCodeSplit: false,
            chunkSizeWarningLimit: 6000,
            minify: false,
            assetsInlineLimit: 0,
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => {
                        const base = assetInfo.name || '';
                        const ext = base.includes('.') ? base.split('.').pop() || '' : '';
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                            return `img/[name][extname]`;
                        }
                        if (/woff2?|ttf|eot/i.test(ext)) {
                            return `${ext}/[name][extname]`;
                        }
                        if (/css/i.test(ext)) {
                            return `css/[name][extname]`;
                        }
                        return `assets/[name][extname]`;
                    },
                    chunkFileNames: 'js/[name].js',
                    entryFileNames: 'js/index.js',
                },
            },
        },
        experimental: {
            renderBuiltUrl(filename: string, { hostType }: { hostType: 'js' | 'css' | 'html' }) {
                if (hostType === 'js') {
                    return { runtime: `window.__dynamic_base__(${JSON.stringify(filename)})` };
                }
                return { relative: true };
            },
        },
        plugins: [reactRefresh(), splitVendorChunkPlugin()].filter(Boolean),
    };
});
