/**
 * URLs for files under `public/images/` (copied to `build/images/`).
 * In WordPress admin, `wp_localize_script` sets `window.xseeb_base_url.xseeb_plugin_url`
 * to the plugin `build/` directory URL.
 */
export function wpPublicAsset(relativePath: string): string {
    const p = relativePath.replace(/^\//, '');
    if (typeof window !== 'undefined') {
        const w = (window as Window & { xseeb_base_url?: { xseeb_plugin_url?: string } }).xseeb_base_url;
        if (w?.xseeb_plugin_url) {
            const base = String(w.xseeb_plugin_url).replace(/\/?$/, '/');
            return base + p;
        }
    }
    return '/' + p;
}
