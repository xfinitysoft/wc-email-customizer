import axios, { AxiosRequestConfig } from 'axios';

declare global {
    interface Window {
        xseeb_base_url?: {
            xseeb_base_url: string;
            xseeb_plugin_url: string;
            nonce: string;
        };
    }
}

/** WP prints this via wp_localize_script on `xs-easy-email-builder` — read lazily so modules load after it. */
function getWpRestConfig() {
    if (typeof window !== 'undefined' && window.xseeb_base_url) {
        return window.xseeb_base_url;
    }
    /** Vite-only dev: no WP shell — use .env.development.local (see .env.development.example). */
    if (import.meta.env.DEV) {
        const nonce = (import.meta.env.VITE_WP_REST_NONCE as string) || '';
        return {
            xseeb_base_url: '',
            xseeb_plugin_url: '',
            nonce,
        };
    }
    return {
        xseeb_base_url: '',
        xseeb_plugin_url: '',
        nonce: '',
    };
}

let viteDevAuthWarned = false;

function getDevApplicationCredentials(): { username: string; password: string } | null {
    if (!import.meta.env.DEV) {
        return null;
    }
    const username = (import.meta.env.VITE_WP_APPLICATION_USER as string)?.trim() || '';
    const rawPass = (import.meta.env.VITE_WP_APPLICATION_PASSWORD as string) || '';
    const password = rawPass.replace(/\s+/g, '');
    if (!username || !password) {
        if (!viteDevAuthWarned && typeof console !== 'undefined') {
            viteDevAuthWarned = true;
            console.warn(
                '[xs-easy-email-builder] Vite dev: add VITE_WP_APPLICATION_USER + VITE_WP_APPLICATION_PASSWORD to email-builder/.env.development.local (Administrator account + Application Password). Restart npm start.',
            );
        }
        return null;
    }
    return { username, password };
}

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    const wp = getWpRestConfig();
    /** In WP admin, site URL; on Vite dev, '' so `/wp-json/...` hits the dev proxy. */
    config.baseURL = wp.xseeb_base_url || config.baseURL || '';

    const devAppAuth = getDevApplicationCredentials();
    if (devAppAuth) {
        /** Lets axios set `Authorization: Basic …` the same way browsers/cURL do (more reliable than manual headers). */
        config.auth = {
            username: devAppAuth.username,
            password: devAppAuth.password,
        };
    }

    config.headers = config.headers || {};
    const headers = config.headers as Record<string, string>;

    /** Cookie nonce only when not using Application Password (WP admin embed). */
    if (wp.nonce && !config.auth) {
        headers['X-WP-Nonce'] = wp.nonce;
    }
    return config;
});

export const request = {
    async get<T>(url: string, config?: AxiosRequestConfig | undefined) {
        return axiosInstance.get<T>(url, config).then((data) => data.data);
    },
    async post<T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig | undefined
    ) {
        return axiosInstance.post<T>(url, data, config).then((data) => data.data);
    },
};
