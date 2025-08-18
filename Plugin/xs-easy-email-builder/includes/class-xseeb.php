<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://www.xfinitysoft.com
 * @since      1.0.0
 *
 * @package    Easy_Email_Builder
 * @subpackage Easy_Email_Builder/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Easy_Email_Builder
 * @subpackage Easy_Email_Builder/includes
 * @author     Xfinitysoft <xfinitysoft@gmail.com>
 */
class XSEEB {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      XSEEB_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $easy_email_builder    The string used to uniquely identify this plugin.
	 */
	protected $easy_email_builder;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'XSEEB_VERSION' ) ) {
			$this->version = XSEEB_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->easy_email_builder = 'xs-easy-email-builder';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - XSEEB_Loader. Orchestrates the hooks of the plugin.
	 * - XSEEB_i18n. Defines internationalization functionality.
	 * - XSEEB_Admin. Defines all hooks for the admin area.
	 * - XSEEB_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'includes/class-xseeb-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'includes/class-xseeb-i18n.php';
		require_once plugin_dir_path( __DIR__ ) . 'common/function.php';
		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'admin/class-xseeb-admin.php';

		$this->loader = new XSEEB_Loader();
	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the XSEEB_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new XSEEB_I18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new XSEEB_Admin( $this->get_easy_email_builder(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts', 10 );
		$this->loader->add_filter( 'script_loader_tag', $plugin_admin, 'xseeb_add_id_to_script', 10, 3 );
		$this->loader->add_action( 'admin_menu', $plugin_admin, 'xseeb_add_menu' );
		$this->loader->add_action( 'init', $plugin_admin, 'xseeb_register_post_type' );
		$this->loader->add_action( 'rest_api_init', $plugin_admin, 'xseeb_register_routes' );
		$this->loader->add_filter( 'woocommerce_mail_callback_params', $plugin_admin, 'xseeb_customize_email', 99, 2 );
		$this->loader->add_filter( 'wp_new_user_notification_email', $plugin_admin, 'xseeb_new_user_email', 10, 2 );
		$this->loader->add_action( 'wp_ajax_xseeb_send_mail', $plugin_admin, 'xseeb_send_mail' );
	}
	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The reference to the class the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_easy_email_builder() {
		return $this->easy_email_builder;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    XSEEB_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}
}
