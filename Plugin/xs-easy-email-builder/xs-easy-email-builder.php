<?php
/**
 * The Main file of plugins.
 *
 * @link              https://www.xfinitysoft.com
 * @since             1.0.2
 * @package           Easy_Email_Builder
 *
 * @wordpress-plugin
 * Plugin Name:       Email Customizer for woocommerce
 * Description:       EasyMail Email Template Customizer for WooCommerce allows you to customize your transactional email templates and create beautiful, professional looking emails that keep customers impressed – even post-purchase.
 * Version:           3.0.3
 * Author:            Xfinitysoft
 * Author URI:        https://www.xfinitysoft.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       xs-easy-email-builder
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'XSEEB_VERSION', '1.0.0' );
define( 'XSEEB_PLUGIN_FILE', __FILE__ );
define( 'XSEEB_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'XSEEB_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-xseeb-activator.php
 */

function xseeb_activate() {
	if ( ! is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
		deactivate_plugins( plugin_basename( __FILE__ ) );
		wp_die( esc_html__( 'Please install and activate WooCommerce to use Easy Email Builder.', 'xs-easy-email-builder' ), 'Plugin dependency check', array( 'back_link' => true ) );
	}
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-xseeb-activator.php';
	XSEEB_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-xseeb-deactivator.php
 */
function xseeb_deactivate() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-xseeb-deactivator.php';
	XSEEB_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'xseeb_activate' );
register_deactivation_hook( __FILE__, 'xseeb_deactivate' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-xseeb.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function xseeb_run() {
		$plugin = new XSEEB();
		$plugin->run();
}
xseeb_run();
