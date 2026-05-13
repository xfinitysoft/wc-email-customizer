# Email Customizer for WooCommerce (xs-easy-email-builder)

WordPress plugin that embeds a drag-and-drop **Easy Email**–based builder for WooCommerce transactional emails. Customize layouts, blocks, and styling; preview on desktop and mobile; send test emails from the admin UI.

| | |
| --- | --- |
| **WordPress** | Requires [WooCommerce](https://woocommerce.com/) |
| **PHP** | 7.0+ (see `readme.txt` for official header) |
| **License** | GPL-2.0+ |
| **Text domain** | `xs-easy-email-builder` |

Plugin header version lives in [`xs-easy-email-builder.php`](xs-easy-email-builder.php). WordPress.org–style changelog and tags are in [`readme.txt`](readme.txt).

---

## Features

- Visual email builder for core WooCommerce email types (new order, completed, on-hold, refunds, customer note, invoices, account emails, etc.)
- Pre-built starter templates
- REST API for saving templates and collections
- Optional local Vite dev server with proxy to your WordPress site

---

## Installation (site owners)

1. Copy this folder to `wp-content/plugins/xs-easy-email-builder/`.
2. In **Plugins**, activate **Email Customizer for woocommerce**.
3. Ensure **WooCommerce** is installed and active (activation checks this).
4. Open **WCMail** in the admin menu to use the builder.

For distribution, ship the plugin **with** the `build/` directory produced by `npm run build` (see below), unless you document that developers must build first.

---

## Development

The React app lives in **`email-builder/`**. Built assets are emitted to **`build/`** at the plugin root (CSS + JS consumed by WordPress).

### Prerequisites

- Node.js and npm
- A local WordPress + WooCommerce site (e.g. XAMPP)

### One-time setup

From the **plugin root** (this directory):

```bash
npm run install-app
```

Optional: this repo uses a visible `gitignore` file instead of `.gitignore` for some tooling compatibility:

```bash
npm run setup-git-ignore
```

### Local editor with Vite

1. Copy `email-builder/development.env.example` to `email-builder/.env.development.local` and set `VITE_WP_ORIGIN` (and application password fields if you use REST from `localhost:5173` without cookies).
2. From plugin root:

```bash
npm start
```

Vite runs in `email-builder/`; configure proxy/origin in that env file so `/wp-json` hits your WordPress install.

### Production build

From plugin root:

```bash
npm run build
```

This runs `vite build` in `email-builder/` and updates `build/` (JS, CSS, images). Reload the admin page after building.

---

## Repository layout (high level)

| Path | Role |
| --- | --- |
| `xs-easy-email-builder.php` | Bootstrap, constants, activation hooks |
| `includes/` | Loader, i18n, core plugin class |
| `admin/` | Admin PHP, partials, enqueue, REST callbacks, `admin/js/` glue |
| `email-builder/` | Vite + React + TypeScript source |
| `build/` | **Generated** production assets (commit if you deploy from git) |
| `readme.txt` | WordPress.org–style readme / changelog |

---

## Contributing

1. Fork and branch from your baseline.
2. Run `npm run build` before committing if you changed `email-builder/` sources.
3. Match existing PHP (WPCS-friendly) and JS/TS style in the tree.

---

## Changelog

See **[readme.txt](readme.txt)** → `== Changelog ==` for version history.

---

## Credits

- WordPress plugin integration: **Xfinitysoft**
- Email editor stack builds on the **Easy Email** ecosystem (see `email-builder/package.json` for upstream references).

---

## License

GPL-2.0 or later. See [license.txt](http://www.gnu.org/licenses/gpl-2.0.txt) (WordPress standard) or your copy of the license in the distribution.
