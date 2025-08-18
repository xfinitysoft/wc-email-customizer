<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://www.xfinitysoft.com
 * @since      1.0.0
 *
 * @package    Easy_Email_Builder
 * @subpackage Easy_Email_Builder/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Easy_Email_Builder
 * @subpackage Easy_Email_Builder/admin
 * @author     Xfinitysoft <xfinitysoft@gmail.com>
 */
class XSEEB_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $easy_email_builder    The ID of this plugin.
	 */
	private $easy_email_builder;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;
	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $template_id    Id of template.
	 */
	protected $template_id;
	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $easy_email_builder       The name of this plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $easy_email_builder, $version ) {

		$this->easy_email_builder = $easy_email_builder;
		$this->version            = $version;
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in XSEEB_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The XSEEB_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		//phpcs:ignore
		if ( isset( $_GET['page'] ) && 'xseeb-page' === $_GET['page'] ) {
			wp_enqueue_style( 'xseeb-react', XSEEB_PLUGIN_URL . 'admin/css/index-5fb91c04.css', array(), time(), 'all' );
			//phpcs:ignore
			if ( isset( $_GET['id'] ) ) {
				wp_enqueue_style( 'xseeb-react-admin', XSEEB_PLUGIN_URL . 'admin/css/xseeb-admin.css', array(), $this->version, 'all' );
			} else {
				wp_add_inline_style(
					'xseeb-react',
					'#xseeb-loader{
					position: fixed;
					top: calc(100vh - 65vh);
					left: calc(100vw - 55vw);
				}'
				);
			}
		}
		//phpcs:ignore
		if ( isset( $_GET['page'] ) && 'xseeb-support' === $_GET['page'] ) {
			wp_enqueue_style( 'xseeb-support', XSEEB_PLUGIN_URL . 'admin/css/xseeb-support.css', array(), $this->version, 'all' );
		}
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		//phpcs:ignore
		if ( isset( $_GET['page'] ) && 'xseeb-page' === $_GET['page'] ) {
			$plugin_url  = XSEEB_PLUGIN_URL . 'admin/';
			$base_script = 'window.__dynamic_base__ = function(filename) { 
                return "' . esc_url( $plugin_url ) . '" + filename;
            };';

			// Ensure inline script is registered before any dependent scripts.

			wp_enqueue_script( $this->easy_email_builder, XSEEB_PLUGIN_URL . 'admin/js/xseeb-admin.js', array( 'jquery' ), $this->version, true );
			wp_add_inline_script( $this->easy_email_builder, 'window.global = window;', 'before' );
			wp_add_inline_script( $this->easy_email_builder, $base_script, 'before' );
			wp_localize_script(
				$this->easy_email_builder,
				'xseeb_base_url',
				array(
					'xseeb_base_url'   => site_url(),
					'xseeb_plugin_url' => XSEEB_PLUGIN_URL . 'admin/',
					'nonce'            => wp_create_nonce( 'wp_rest' ),
				)
			);
			wp_register_script(
				'xseeb-react-vendor',
				$plugin_url . 'js/vendor-62a36e0f.js',
				array(),
				$this->version,
				true
			);
			wp_register_script(
				'xseeb-react',
				$plugin_url . 'js/index-785da1c1.js',
				array(),
				$this->version,
				true
			);
			wp_enqueue_script( 'xseeb-react-vendor' );
			wp_enqueue_script( 'xseeb-react' );

		}
		//phpcs:ignore
		if ( isset( $_GET['page'] ) && 'xseeb-support' === $_GET['page'] ) {
			wp_enqueue_script( 'xseeb-support', XSEEB_PLUGIN_URL . 'admin/js/xseeb-support.js', array(), $this->version, true );
		}
	}
	/**
	 * Add script id in header.
	 *
	 * @since    1.0.0
	 *
	 * @param string $tag script of header WordPress.
	 * @param string $handle Handle id of script.
	 * @param string $src Url if script.
	 */
	public function xseeb_add_id_to_script( $tag, $handle, $src ) {
		if ( 'xseeb-react' === $handle ) {
			return str_replace(
				'<script',
				"<script type='module'",
				$tag
			);
		}
		if ( 'xseeb-react-vendor' === $handle ) {
			return '<link rel="modulepreload" href="' . esc_url( $src ) . '">';
		}
		return $tag;
	}
	/**
	 * Add menu in admin menu.
	 *
	 * @since    1.0.0
	 */
	public function xseeb_add_menu() {
		$license = get_option( 'xseeb_license', array() );
		if ( isset( $license['status'] ) && $license['status'] ) {
			add_menu_page(
				esc_html__( 'WCMail', 'xs-easy-email-builder' ),
				esc_html__( 'WCMail', 'xs-easy-email-builder' ),
				'manage_options',
				'xseeb-page',
				array( $this, 'xseeb_page' ),
				'dashicons-align-wide',
				20
			);
			add_submenu_page( 'xseeb-page', esc_html__( 'Support', 'xs-easy-email-builder' ), esc_html__( 'Support', 'xs-easy-email-builder' ), 'manage_options', 'xseeb-support', array( $this, 'xseeb_support_page' ) );
		} else {
			add_menu_page( esc_html__( 'WCMail', 'xs-easy-email-builder' ), esc_html__( 'WCMail', 'xs-easy-email-builder' ), 'manage_options', 'xseeb-support', array( $this, 'xseeb_support_page' ), 'dashicons-align-wide', 20 );
		}
	}
		/**
		 * Callback function Email Customizer.
		 *
		 * @since    1.0.0
		 */
	public function xseeb_page() {
		include_once plugin_dir_path( __FILE__ ) . 'partials/xseeb-admin-display.php';
	}
	/**
	 * Callback function of support page.
	 *
	 * @since    1.0.0
	 */
	public function xseeb_support_page() {
		include_once plugin_dir_path( __FILE__ ) . 'partials/xseeb-support-page.php';
	}
	/**
	 * Register Post type.
	 *
	 * @since    1.0.0
	 */
	public function xseeb_register_post_type() {
		$labels = array(
			'name'          => _x( 'Easy Email Builder', 'Easy Email Builder', 'xs-easy-email-builder' ),
			'singular_name' => _x( 'Easy Email Builder', 'Easy Email Builder', 'xs-easy-email-builder' ),
			'menu_name'     => _x( 'Easy Email Builder', 'Easy Email Builder', 'xs-easy-email-builder' ),
			'add_new'       => __( 'Add New', 'xs-easy-email-builder' ),
			'add_new_item'  => __( 'Add New Book', 'xs-easy-email-builder' ),
			'new_item'      => __( 'New Email', 'xs-easy-email-builder' ),
			'edit_item'     => __( 'Edit Email', 'xs-easy-email-builder' ),
			'view_item'     => __( 'View Email', 'xs-easy-email-builder' ),
			'all_items'     => __( 'All Emails', 'xs-easy-email-builder' ),
			'search_items'  => __( 'Search Email', 'xs-easy-email-builder' ),
		);
		$args   = array(
			'labels'             => $labels,
			'public'             => false,
			'publicly_queryable' => false,
			'show_ui'            => true,
			'show_in_menu'       => false,
			'query_var'          => true,
			'rewrite'            => false,
			'menu_icon'          => 'dashicons-align-wide',
			'map_meta_cap'       => true,
			'hierarchical'       => false,
			'menu_position'      => 20,
			'supports'           => false,
			'show_in_rest'       => false,
		);
		$labels = array(
			'name'          => _x( 'Collection', 'Collection', 'xs-easy-email-builder' ),
			'singular_name' => _x( 'Collection', 'Collection', 'xs-easy-email-builder' ),
		);
		$args   = array(
			'labels'             => $labels,
			'public'             => false,
			'publicly_queryable' => false,
			'show_ui'            => false,
			'show_in_menu'       => false,
			'query_var'          => true,
			'rewrite'            => false,
			'map_meta_cap'       => true,
			'hierarchical'       => false,
			'show_in_rest'       => false,
		);
		register_post_type( 'xseeb_emailbuilder', $args );
		register_post_type( 'xseeb_collection', $args );
	}
	/**
	 * Register the routes of api.
	 *
	 * @since    1.0.0
	 */
	public function xseeb_register_routes() {
		register_rest_route(
			'xseeb-builder/v1/email',
			'/get_list',
			array(
				// By using this constant we ensure that when the WP_REST_Server changes our readable endpoints will work as intended.
				'methods'             => array( 'GET', 'POST' ),
				// Here we register our callback. The callback is fired when this endpoint is matched by the WP_REST_Server class.
				'callback'            => array( $this, 'xseeb_get_email_list' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/create',
			array(
				// By using this constant we ensure that when the WP_REST_Server changes our readable endpoints will work as intended.
				'methods'             => array( 'GET', 'POST' ),
				// Here we register our callback. The callback is fired when this endpoint is matched by the WP_REST_Server class.
				'callback'            => array( $this, 'xseeb_create_email' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/getpost',
			array(
				// By using this constant we ensure that when the WP_REST_Server changes our readable endpoints will work as intended.
				'methods'             => array( 'GET', 'POST' ),
				// Here we register our callback. The callback is fired when this endpoint is matched by the WP_REST_Server class.
				'callback'            => array( $this, 'xseeb_getpost_email' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/update_temp',
			array(
				// By using this constant we ensure that when the WP_REST_Server changes our readable endpoints will work as intended.
				'methods'             => array( 'GET', 'POST' ),
				// Here we register our callback. The callback is fired when this endpoint is matched by the WP_REST_Server class.
				'callback'            => array( $this, 'xseeb_update_temp' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/delete_temp',
			array(
				// By using this constant we ensure that when the WP_REST_Server changes our readable endpoints will work as intended.
				'methods'             => array( 'GET', 'POST' ),
				// Here we register our callback. The callback is fired when this endpoint is matched by the WP_REST_Server class.
				'callback'            => array( $this, 'xseeb_delete_temp' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/enable_temp',
			array(
				// By using this constant we ensure that when the WP_REST_Server changes our readable endpoints will work as intended.
				'methods'             => array( 'GET', 'POST' ),
				// Here we register our callback. The callback is fired when this endpoint is matched by the WP_REST_Server class.
				'callback'            => array( $this, 'xseeb_enable_temp' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/disable_temp',
			array(
				// By using this constant we ensure that when the WP_REST_Server changes our readable endpoints will work as intended.
				'methods'             => array( 'GET', 'POST' ),
				// Here we register our callback. The callback is fired when this endpoint is matched by the WP_REST_Server class.
				'callback'            => array( $this, 'xseeb_disable_temp' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/image',
			'/upload',
			array(
				'methods'             => array( 'GET', 'POST' ),
				'callback'            => array( $this, 'xseeb_image_upload' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/preview',
			array(
				'methods'             => array( 'GET', 'POST' ),
				'callback'            => array( $this, 'xseeb_preview_email' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/send',
			array(
				'methods'             => array( 'GET', 'POST' ),
				'callback'            => array( $this, 'xseeb_email_send' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/get_collections',
			array(
				'methods'             => array( 'GET', 'POST' ),
				'callback'            => array( $this, 'xseeb_get_collections' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/add_collection',
			array(
				'methods'             => array( 'GET', 'POST' ),
				'callback'            => array( $this, 'xseeb_add_collection' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
		register_rest_route(
			'xseeb-builder/v1/email',
			'/remove_collection',
			array(
				'methods'             => array( 'GET', 'POST' ),
				'callback'            => array( $this, 'xseeb_remove_collection' ),
				'permission_callback' => array( $this, 'xseeb_permission_callback' ),
			)
		);
	}
	/**
	 * Check the permission.
	 *
	 * @since    1.0.0
	 */
	public function xseeb_permission_callback() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return new WP_Error(
				'rest_forbidden',
				esc_html__( 'You do not have permission to access this resource.', 'xs-easy-email-builder' ),
				array( 'status' => 403 )
			);
		}
		return true;
	}
	/**
	 * Get all email template.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_get_email_list( $request ) {
		$params = $request->get_params();
		if ( isset( $params['xseeb_get_email_list'] ) && 'yes' === $params['xseeb_get_email_list'] ) {
			$posts            = get_posts(
				array(
					'post_type'   => 'xseeb_emailbuilder',
					'post_status' => 'publish',
					'numberposts' => -1,
				)
			);
			$response         = array();
			$response['list'] = array();
			if ( is_array( $posts ) && ! empty( $posts ) ) {
				foreach ( $posts as $post ) {
					$response['list'][] = array(
						'article_id' => $post->ID,
						'title'      => $post->post_title,
						'picture'    => get_post_meta( $post->ID, 'xseeb-email-picture', true ),
						'summary'    => get_post_meta( $post->ID, 'xseeb-email-summary', true ),
						'html'       => get_post_meta( $post->ID, 'xseeb-email-html', true ),
						'etype'      => get_post_meta( $post->ID, 'xseeb-email-etype', true ),
						'status'     => get_post_meta( $post->ID, 'xseeb-email-status', true ),

					);
				}
			}
			$response['count'] = count( $response['list'] );
			return $response;
		}
	}
	/**
	 * Create email template.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_create_email( $request ) {
		$params = $request->get_params();
		if ( isset( $params['content'] ) && ! empty( $params['content'] ) ) {
			$posts = $this->xseeb_get_post_by_meta_value( sanitize_text_field( $params['etype'] ) );
			if ( $posts && is_array( $posts ) ) {
				foreach ( $posts as $post ) {
					update_post_meta( $post->ID, 'xseeb-email-status', 'off' );
				}
			}

			$id = wp_insert_post(
				array(
					'post_title'  => sanitize_text_field( $params['title'] ),
					'post_type'   => 'xseeb_emailbuilder',
					'post_status' => 'publish',
					'meta_input'  => array(
						'xseeb-email-picture' => sanitize_url( $params['picture'] ),
						'xseeb-email-summary' => sanitize_text_field( $params['summary'] ),
						'xseeb-email-content' => $params['content'],
						'xseeb-email-html'    => $params['html'],
						'xseeb-email-etype'   => sanitize_text_field( $params['etype'] ),
						'xseeb-email-status'  => 'on',
					),
				)
			);
			return array(
				'content' => array(
					'article_id' => $id,
					'content'    => $params['content'],
				),
				'title'   => $params['title'],
				'summary' => $params['summary'],
				'etype'   => $params['etype'],
				'status'  => 'on',
			);
		}
	}
	/**
	 * Get email template.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_getpost_email( $request ) {
		$params = $request->get_params();
		if ( isset( $params['article_id'] ) && ! empty( $params['article_id'] ) ) {
			$post_id  = absint( $params['article_id'] );
			$post     = get_post( $post_id );
			$response = array(
				'title'   => $post->post_title,
				'picture' => get_post_meta( $post_id, 'xseeb-email-picture', true ),
				'summary' => get_post_meta( $post_id, 'xseeb-email-summary', true ),
				'content' => array(
					'article_id' => $post_id,
					'content'    => get_post_meta( $post_id, 'xseeb-email-content', true ),
				),
				'html'    => get_post_meta( $post_id, 'xseeb-email-html', true ),
				'etype'   => get_post_meta( $post_id, 'xseeb-email-etype', true ),
				'status'  => get_post_meta( $post_id, 'xseeb-email-status', true ),
			);
			return $response;
		}
	}
	/**
	 * Update email template.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_update_temp( $request ) {
		$params = $request->get_params();
		if ( isset( $params['article_id'] ) && ! empty( $params['article_id'] ) ) {
			$post_id = absint( $params['article_id'] );
			update_post_meta( $post_id, 'xseeb-email-picture', sanitize_url( $params['picture'] ) );
			update_post_meta( $post_id, 'xseeb-email-summary', sanitize_text_field( $params['summary'] ) );
			update_post_meta( $post_id, 'xseeb-email-content', $params['content'] );
			update_post_meta( $post_id, 'xseeb-email-html', $params['html'] );
			update_post_meta( $post_id, 'xseeb-email-etype', sanitize_text_field( $params['etype'] ) );
			wp_update_post(
				array(
					'ID'         => $post_id,
					'post_title' => sanitize_text_field( $params['title'] ),
				)
			);
			return array(
				'content' => array(
					'article_id' => $id,
					'content'    => $params['content'],
				),
				'title'   => $params['title'],
				'summary' => $params['summary'],
				'etype'   => $params['etype'],
			);
		}
	}
	/**
	 * Delete email template.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_delete_temp( $request ) {
		$params = $request->get_params();
		if ( isset( $params['article_id'] ) && ! empty( $params['article_id'] ) ) {
			wp_delete_post( absint( $params['article_id'] ) );
		}
	}
	/**
	 * Enable email template.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_enable_temp( $request ) {
		$params = $request->get_params();
		if ( isset( $params['article_id'] ) && ! empty( $params['article_id'] ) ) {
			$etype = get_post_meta( absint( $params['article_id'] ), 'xseeb-email-etype', true );
			$posts = $this->xseeb_get_post_by_meta_value( $etype );
			if ( $posts && is_array( $posts ) ) {
				foreach ( $posts as $post ) {
					update_post_meta( $post->ID, 'xseeb-email-status', 'off' );
				}
			}
			update_post_meta( $params['article_id'], 'xseeb-email-status', 'on' );
		}
	}
	/**
	 * Disable email template.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_disable_temp( $request ) {
		$params = $request->get_params();
		if ( isset( $params['article_id'] ) && ! empty( $params['article_id'] ) ) {
			update_post_meta( absint( $params['article_id'] ), 'xseeb-email-status', 'off' );
		}
	}
	/**
	 * Preview email.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_preview_email( $request ) {
		$params        = $request->get_params();
		$subject       = sanitize_text_field( $params['title'] );
		$subtile       = sanitize_text_field( $params['summary'] );
		$content       = $params['content'];
		$html          = $params['html'];
		$order_object  = $this->get_last_order();
		$xseeb_content = $this->xseeb_replace_shortcode( $order_object, $html );
		$xseeb_content = $this->xseeb_replace_products( $order_object, $xseeb_content, '0', $content );
		$xseeb_content = $this->xseeb_replace_table_data( $order_object, $xseeb_content );
		$subject       = $this->xseeb_replace_shortcode( $order_object, $subject );
		$response      = array(
			'title'   => $subject,
			'summary' => $subtile,
			'content' => $content,
			'html'    => $xseeb_content,
		);
		return $response;
	}
	/**
	 * Upload image
	 *
	 * @since    1.0.0
	 */
	public function xseeb_image_upload() {
		if ( ! function_exists( 'wp_handle_upload' ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
		}
		// for multiple file upload.
		$upload           = array();
		$upload_overrides = array(
			'test_form' => false,
			'mimes'     => get_allowed_mime_types(),
		);
		if ( ! current_user_can( 'manage_options' ) ) {
			return new WP_Error(
				'rest_forbidden',
				esc_html__( 'You do not have permission to access this resource.', 'xs-easy-email-builder' ),
				array( 'status' => 403 )
			);
		}
		// Check if file.
        //phpcs:ignore
        if ( empty( $_FILES['file'] ) || ! isset( $_FILES['file'] ) ) {
			return esc_html__( 'Image is missing', 'xs-easy-email-builder' );
		}
        //phpcs:ignore
		$files         = array_map( 'sanitize_text_field', $_FILES['file'] );
		$file_name     = isset( $files['name'] ) ? sanitize_file_name( $files['name'] ) : '';
		$file_tmp_name = isset( $files['tmp_name'] ) ? $files['tmp_name'] : '';
		$file_size     = isset( $files['size'] ) ? intval( $files['size'] ) : 0;
		$file_error    = isset( $files['error'] ) ? intval( $files['error'] ) : 0;
		// Validate upload errors.
		if ( UPLOAD_ERR_OK !== $file_error ) {
			return new WP_Error(
				'upload_error',
				esc_html__( 'An error occurred while uploading the file.', 'xs-easy-email-builder' )
			);
		}
		$files['name'] = time() . '.png';
		$upload        = wp_handle_upload( $files, $upload_overrides );
		if ( isset( $upload['error'] ) ) {
			return esc_html( $upload['error'] );
		}

		// Securely return the uploaded file URL.
		return esc_url( $upload['url'] );
	}
	/**
	 * Send email.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_email_send( $request ) {
		$params        = $request->get_params();
		$to            = sanitize_email( $params['to_email'] );
		$subject       = sanitize_text_field( $params['subject'] );
		$title         = sanitize_text_field( $params['text'] );
		$content       = $params['content'];
		$html          = $params['html'];
		$order_object  = $this->get_last_order();
		$xseeb_content = $this->xseeb_replace_shortcode( $order_object, $html );
		$xseeb_content = $this->xseeb_replace_products( $order_object, $xseeb_content, '0', $content );
		$xseeb_content = $this->xseeb_replace_table_data( $order_object, $xseeb_content );
		$subject       = $this->xseeb_replace_shortcode( $order_object, $subject );
		$headers[]     = 'Content-Type: text/html; charset=UTF-8';
		return wp_mail( $to, $subject, $xseeb_content, $headers );
	}
	/**
	 * Get Colletcion.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_get_collections( $request ) {
		$params = $request->get_params();

		$response = array(
			'tiltle' => 'Collection',
			'name'   => 'Colletion',
			'blocks' => array(),
		);
		if ( isset( $params['xseeb_get_email_collection'] ) && 'yes' === $params['xseeb_get_email_collection'] ) {
			$posts = get_posts(
				array(
					'post_type'   => 'xseeb_collection',
					'post_status' => 'publish',
					'numberposts' => -1,
				)
			);
			if ( is_array( $posts ) && ! empty( $posts ) ) {
				foreach ( $posts as $post ) {
					$response['blocks'][] = array(
						'id'          => get_post_meta( $post->ID, 'xseeb_id', true ),
						'title'       => $post->post_title,
						'description' => $post->post_content,
						'thumbnail'   => get_post_meta( $post->ID, 'xseeb_thumbnail', true ),
						'data'        => get_post_meta( $post->ID, 'xseeb_data', true ),

					);
				}
			}
		}
		return $response;
	}
	/**
	 * Add Colletcion.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseeb_add_collection( $request ) {
		$params   = $request->get_params();
		$response = array(
			'tiltle' => 'Collection',
			'name'   => 'Colletion',
			'blocks' => array(),
		);
		if ( isset( $params['data'] ) && ! empty( $params['data'] ) ) {
			$id    = wp_insert_post(
				array(
					'post_title'   => sanitize_text_field( $params['label'] ),
					'post_type'    => 'xseeb_collection',
					'post_content' => sanitize_text_field( $params['helpText'] ),
					'post_status'  => 'publish',
					'meta_input'   => array(
						'xseeb_thumbnail' => $params['thumbnail'],
						'xseeb_data'      => $params['data'],
						'xseeb_id'        => $params['id'],
					),
				)
			);
			$posts = get_posts(
				array(
					'post_type'   => 'xseeb_collection',
					'post_status' => 'publish',
					'numberposts' => -1,
				)
			);
			if ( is_array( $posts ) && ! empty( $posts ) ) {
				foreach ( $posts as $post ) {
					$response['blocks'][] = array(
						'id'          => get_post_meta( $post->ID, 'xseeb_id', true ),
						'title'       => $post->post_title,
						'description' => $post->post_content,
						'thumbnail'   => get_post_meta( $post->ID, 'xseeb_thumbnail', true ),
						'data'        => get_post_meta( $post->ID, 'xseeb_data', true ),

					);
				}
			}
		}
		return $response;
	}
	/**
	 * Remove Colletcion.
	 *
	 * @since    1.0.0
	 * @param  array $request Param of api request.
	 */
	public function xseewpd_remove_collection( $request ) {
		$params   = $request->get_params();
		$response = array(
			'tiltle' => 'Collection',
			'name'   => 'Colletion',
			'blocks' => array(),
		);
		if ( isset( $params['params'] ) && ! empty( $params['params'] ) ) {
			$post_ids = get_posts(
				array(
					'post_type'   => 'xseeb_collection',
					'post_status' => 'publish',
					'numberposts' => -1,
					//phpcs:ignore
					'meta_key'    => 'xseeb_id',
					//phpcs:ignore
					'meta_value'  => $params['params']['id'],
					'fields'      => 'ids',
				)
			);
			if ( is_array( $post_ids ) && ! empty( $post_ids ) ) {
				foreach ( $post_ids as $id ) {
					wp_delete_post( $id );
				}
				$posts = get_posts(
					array(
						'post_type'   => 'xseeb_collection',
						'post_status' => 'publish',
						'numberposts' => -1,
					)
				);
				if ( is_array( $posts ) && ! empty( $posts ) ) {
					foreach ( $posts as $post ) {
						$response['blocks'][] = array(
							'id'          => get_post_meta( $post->ID, 'xseeb_id', true ),
							'title'       => $post->post_title,
							'description' => $post->post_content,
							'thumbnail'   => get_post_meta( $post->ID, 'xseeb_thumbnail', true ),
							'data'        => get_post_meta( $post->ID, 'xseeb_data', true ),

						);
					}
				}
			}
			return $response;
		}
	}
	/**
	 * Get the lastest order of woocommerce.
	 *
	 * @since    1.0.0
	 */
	public function get_last_order() {
		$latest_order = wc_get_orders(
			array(
				'limit'   => 1,
				'orderby' => 'date',
				'order'   => 'DESC',
				'status'  => array( 'wc-on-hold', 'wc-processing', 'wc-completed' ),
			)
		);
		if ( ! empty( $latest_order ) ) {
			return $latest_order[0];
		}
		return $latest_order;
	}
	/**
	 * Custimize the subject all email.
	 *
	 * @since    1.0.0
	 * @param array  $mail_params  Param of array.
	 * @param object $email Object of email.
	 */
	public function xseeb_customize_email( $mail_params, $email ) {
		if ( isset( $email->object ) ) {
			switch ( $email->id ) {
				case 'new_order':
					$email_design = $this->xseeb_get_post_by_type( 'wc_new_order' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
						$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
						$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
						$mail_params[2]     = $xseeb_content;
					}
					break;
				case 'cancelled_order':
					$email_design = $this->xseeb_get_post_by_type( 'wc_cancelled_order' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
						$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
						$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
						$mail_params[2]     = $xseeb_content;
					}
					break;
				case 'failed_order':
					$email_design = $this->xseeb_get_post_by_type( 'wc_failed_order' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
						$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
						$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
						$mail_params[2]     = $xseeb_content;
					}
					break;
				case 'customer_on_hold_order':
					$email_design = $this->xseeb_get_post_by_type( 'wc_order_on_hold' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
						$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
						$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
						$mail_params[2]     = $xseeb_content;
					}
					break;
				case 'customer_processing_order':
					$email_design = $this->xseeb_get_post_by_type( 'wc_processing_order' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
						$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
						$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
						$mail_params[2]     = $xseeb_content;
					}
					break;
				case 'customer_completed_order':
					$email_design = $this->xseeb_get_post_by_type( 'wc_completed_order' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
						$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
						$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
						$mail_params[2]     = $xseeb_content;
					}
					break;
				case 'customer_refunded_order':
					$total_refunded = $email->object->get_total_refunded();
					$order_total    = $email->object->get_total();
					if ( $total_refunded < $order_total ) {
						$email_design = $this->xseeb_get_post_by_type( 'wc_partial_refunded_order' );
						if ( ! empty( $email_design ) ) {
							$subject            = $email_design->post_title;
							$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
							$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
							$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
							$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
							$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
							$mail_params[2]     = $xseeb_content;
						}
					} else {
						$email_design = $this->xseeb_get_post_by_type( 'wc_fully_refunded_order' );
						if ( ! empty( $email_design ) ) {
							$subject            = $email_design->post_title;
							$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
							$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
							$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
							$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
							$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
							$mail_params[2]     = $xseeb_content;
						}
					}

					break;
				case 'customer_invoice':
					$email_design = $this->xseeb_get_post_by_type( 'wc_customer_invoice_paid' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
						$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
						$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
						$mail_params[2]     = $xseeb_content;
					}
					break;
				case 'customer_note':
					$email_design = $this->xseeb_get_post_by_type( 'wc_customer_note' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$xseeb_content      = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
						$xseeb_content      = $this->xseeb_replace_products( $email->object, $xseeb_content, $email_design->ID );
						$xseeb_content      = $this->xseeb_replace_table_data( $email->object, $xseeb_content );
						$mail_params[2]     = $xseeb_content;
					}
					break;
				case 'customer_reset_password':
					$email_design = $this->xseeb_get_post_by_type( 'wc_reset_password' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$mail_params[2]     = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
					}
					break;
				case 'customer_new_account':
					$email_design = $this->xseeb_get_post_by_type( 'wc_new_account' );
					if ( ! empty( $email_design ) ) {
						$subject            = $email_design->post_title;
						$mail_params[1]     = $this->xseeb_replace_shortcode( $email->object, $subject );
						$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
						$mail_params[2]     = $this->xseeb_replace_shortcode( $email->object, $xseeb_content_html[0] );
					}
					break;
				default:
					break;
			}
			$mail_params[3] = array( 'Content-Type: text/html; charset=UTF-8' );
		}

		return $mail_params;
	}
	/**
	 * New user email notification.
	 *
	 * @since    1.0.0
	 * @param string $wp_new_user_notification_email Content of email.
	 * @param object $user Detail of customer data.
	 */
	public function xseeb_new_user_email( $wp_new_user_notification_email, $user ) {
		$register_data = array();
		if ( isset( $user->user_login ) ) {
			$register_data['user_name'] = $user->user_login;
		}
		if ( isset( $user->first_name ) ) {
			$register_data['first_name'] = $user->first_name;
		}
		if ( isset( $user->last_name ) ) {
			$register_data['last_name'] = $user->last_name;
		}
		if ( isset( $user->user_pass ) && ! empty( $user->user_pass ) ) {
			$register_data['password'] = $user->user_pass;
		} else {
			$key                       = get_password_reset_key( $user );
			$register_data['password'] = network_site_url( "wp-login.php?action=rp&key=$key&login=" . rawurlencode( $user->user_login ), 'login' );
		}
		$user->register_data = $register_data;
		$email_design        = $this->xseeb_get_post_by_type( 'wc_new_account' );
		if ( ! empty( $email_design ) ) {
			$xseeb_content_html = get_post_meta( $email_design->ID, 'xseeb-email-html' );
			$subject            = $email_design->post_title;
			if ( $subject ) {
				$wp_new_user_notification_email['subject'] = $this->xseeb_replace_shortcode( $user, $subject );
			}
			$xseeb_content                             = $this->xseeb_replace_shortcode( $user, $xseeb_content_html[0] );
			$wp_new_user_notification_email['message'] = $xseeb_content;
			$wp_new_user_notification_email['headers'] = array( 'Content-Type: text/html; charset=UTF-8' );
		}
		return $wp_new_user_notification_email;
	}
	/**
	 * Get post by meta value.
	 *
	 * @since    1.0.0
	 * @param string $value Name of email.
	 * @return object $post Post of email.
	 */
	public function xseeb_get_post_by_meta_value( $value ) {
		$posts = get_posts(
			array(
				'post_type' => 'xseeb_emailbuilder',
			//phpcs:ignore
			'meta_query' => array(
				'relation' => 'AND',
				array(
					'key'     => 'xseeb-email-etype',
					'value'   => $value,
					'compare' => 'LIKE',
				),
				array(
					'key'     => 'xseeb-email-status',
					'value'   => 'on',
					'compare' => 'LIKE',
				),
			),
			)
		);

		return $posts ? $posts : null;
	}

	/**
	 * Get post by name and post type
	 *
	 * @since    1.0.0
	 * @param string $name Name of email.
	 * @param string $post_type Name of posttype.
	 * @return object $query Post of email.
	 */
	public function xseeb_get_post_by_type( $name, $post_type = 'xseeb_emailbuilder' ) {
		$query = new WP_Query(
			array(
				'post_type' => $post_type,
			//phpcs:ignore
			'meta_query' => array(
				'relation' => 'AND',
				array(
					'key'   => 'xseeb-email-etype',
					'value' => $name,
				),
				array(
					'key'   => 'xseeb-email-status',
					'value' => 'on',
				),
			),
			)
		);

		return $query->have_posts() ? reset( $query->posts ) : null;
	}
	/**
	 * Replace Shortcode.
	 *
	 * @since    1.0.0
	 * @param object $order Object of order detail.
	 * @param string $xseeb_content Content of email.
	 * @param array  $args Argument of order.
	 * @return string $xseeb_content Content of email.
	 */
	public function xseeb_replace_shortcode( $order, $xseeb_content, $args = array() ) {
		$shortcodes = $this->xseeb_default_shortcode_for_replace();
		$order_note = isset( $args['customer_note'] ) ? $args['customer_note'] : '';
		if ( $order ) {
			if ( is_a( $order, 'WC_Order' ) ) {
				$date_fm     = get_option( 'date_format' );
				$refunds     = $order ? $order->get_refunds() : '';
				$refund_html = '';
				if ( $refunds ) {
					foreach ( $refunds as $id => $refund ) {
						$refund_html .= '<div>' . wc_price( '-' . $refund->get_amount(), array( 'currency' => $order->get_currency() ) ) . '</div>';
					}
				}
				$items              = $order->get_items();
				$xseeb_order_object = array();
				$xseeb_cart_table   = '<table style="width:100%;text-align: center;">
					  <tr>
						  <th>Name</th>
						  <th>Quantity</th>
						  <th>subtotal</th>
						  <th>Total</th>
					  </tr>';
				foreach ( $items as $item ) {
					$xseeb_order_object = $item->get_data();
					$xseeb_cart_table  .= '<tr>
							<td>' . $xseeb_order_object['name'] . '</td>
							<td>' . $xseeb_order_object['quantity'] . '</td>
							<td>' . $xseeb_order_object['subtotal'] . '</td>
							<td>' . $xseeb_order_object['total'] . '</td>
					</tr>';
				}
				$xseeb_cart_table                       .= '</table>';
				$payment_method                          = ( $order && $order->get_total() > 0 && $order->get_payment_method_title() && 'other' !== $order->get_payment_method_title() ) ? $order->get_payment_method_title() : '';
				$shortcodes['{{order.id}}']              = $order->get_id();
				$shortcodes['{{customer.name}}']         = $order->get_formatted_billing_full_name();
				$shortcodes['{{customer.email}}']        = $order->get_billing_email();
				$shortcodes['{{customer.note}}']         = $order->get_customer_note();
				$shortcodes['{{payment.method}}']        = $payment_method;
				$shortcodes['{{payment.url}}']           = $order->get_checkout_payment_url();
				$shortcodes['{{order.number}}']          = $order->get_order_number();
				$shortcodes['{{item.count}}']            = $order->get_item_count();
				$shortcodes['{{order.note}}']            = $order_note;
				$shortcodes['{{subtotal.price}}']        = $order->get_subtotal_to_display();
				$shortcodes['{{total_price}}']           = $order->get_formatted_order_total();
				$shortcodes['{{order.date}}']            = date_i18n( $date_fm, strtotime( $order->get_date_created() ) );
				$shortcodes['{{order.fully.refund}}']    = $refund_html;
				$shortcodes['{{order.partial.refund}}']  = $refund_html;
				$shortcodes['{{order.received.url}}']    = $order->get_checkout_order_received_url();
				$shortcodes['{{order.cart}}']            = $xseeb_cart_table;
				$shortcodes['{{order.discount}}']        = $order->get_discount_to_display();
				$shortcodes['{{order.shipping}}']        = wc_price( $order->get_shipping_total() );
				$shortcodes['{{order.shipping_method}}'] = $order->get_shipping_to_display();
				$tax                                     = '';
				if ( 'excl' === get_option( 'woocommerce_tax_display_cart' ) && wc_tax_enabled() ) {
					if ( 'itemized' === get_option( 'woocommerce_tax_total_display' ) ) {
						$taxes = array();
						foreach ( $order->get_tax_totals() as $code => $tax ) {
							$taxes[] = $tax->label . ' : ' . $tax->formatted_amount;
						}
						$tax = implode( ',', $taxes );
					} else {
						$tax = wc_price( $order->get_total_tax(), array( 'currency' => $order->get_currency() ) );
					}
				}
				$shortcodes['{{order.tax}}']           = $tax;
				$shortcodes['{{billing.first_name}}']  = $order->get_billing_first_name();
				$shortcodes['{{billing.last_name}}']   = $order->get_billing_last_name();
				$shortcodes['{{billing.full_name}}']   = $order->get_formatted_billing_full_name();
				$shortcodes['{{billing.company}}']     = $order->get_billing_company();
				$shortcodes['{{billing.phone}}']       = $order->get_billing_phone();
				$shortcodes['{{billing.address1}}']    = $order->get_billing_address_1();
				$shortcodes['{{billing.address2}}']    = $order->get_billing_address_2();
				$shortcodes['{{billing.city}}']        = $order->get_billing_city();
				$billing_states                        = WC()->countries->get_states( $order->get_billing_country() );
				$billing_state                         = ! empty( $billing_states[ $order->get_billing_state() ] ) ? $billing_states[ $order->get_billing_state() ] : '';
				$shortcodes['{{billing.state}}']       = $billing_state;
				$shortcodes['{{billing.zip}}']         = $order->get_billing_postcode();
				$billing_country                       = WC()->countries->countries[ $order->get_billing_country() ];
				$shortcodes['{{billing.country}}']     = $billing_country;
				$shortcodes['{{billing.email}}']       = $order->get_billing_email();
				$shortcodes['{{billing.full_address}'] = $order->get_formatted_billing_address();
				$shortcodes['{{shipping.first_name}}'] = $order->get_shipping_first_name();
				$shortcodes['{{shipping.last_name}}']  = $order->get_shipping_last_name();
				$shortcodes['{{shipping.full_name}}']  = $order->get_formatted_shipping_full_name();
				$shortcodes['{{shipping.company}}']    = $order->get_shipping_company();
				$shortcodes['{{shipping.address1}}']   = $order->get_shipping_address_1();
				$shortcodes['{{shipping.address2}}']   = $order->get_shipping_address_2();
				$shortcodes['{{shipping.city}}']       = $order->get_shipping_city();
				$shipping_states                       = WC()->countries->get_states( $order->get_shipping_country() );
				$shipping_state                        = ! empty( $shipping_states[ $order->get_shipping_state() ] ) ? $shipping_states[ $order->get_shipping_state() ] : '';
				$shortcodes['{{shipping.state}}']      = $shipping_state;
				$shortcodes['{{shipping.zip}}']        = $order->get_shipping_postcode();
				$shipping_country                      = '';
				if ( isset( WC()->countries->countries[ $order->get_shipping_country() ] ) ) {
					$shipping_country = WC()->countries->countries[ $order->get_shipping_country() ];
				}

				$shortcodes['{{shipping.country}}']      = $shipping_country;
				$shortcodes['{{shipping.full_address}}'] = $order->get_formatted_shipping_address();
			}
			if ( property_exists( $order, 'object' ) && is_a( $order->object, 'WP_User' ) ) {
				$shortcodes['{{user.login}}']          = $order->user_login ?? '';
				$shortcodes['{{user.password}}']       = $order->user_pass ?? '';
				$shortcodes['{{user.email}}']          = $order->user_email ?? '';
				$shortcodes['{{user.reset_pass_url}}'] = esc_url( wp_lostpassword_url() );

				if ( isset( $order->object->ID ) ) {
					$user_id                      = $order->object->ID;
					$shortcodes['{{first.name}}'] = get_user_meta( $user_id, 'first_name', true );
					$shortcodes['{{last.name}}']  = get_user_meta( $user_id, 'last_name', true );
				}
			}
			if ( is_a( $order, 'WP_User' ) ) {
				if ( ! empty( $order->register_data ) ) {
					$shortcodes['{{user.login}}']          = $order->user_login ?? '';
					$shortcodes['{{customer.name}}']       = $order->register_data['user_name'] ?? '';
					$shortcodes['{{user.name}}']           = $order->register_data['user_name'] ?? '';
					$shortcodes['{{first.name}}']          = $order->register_data['first_name'] ?? '';
					$shortcodes['{{last.name}}']           = $order->register_data['last_name'] ?? '';
					$shortcodes['{{user.password}}']       = $order->register_data['password'] ?? '';
					$shortcodes['{{user.email}}']          = $order->user_email ?? '';
					$shortcodes['{{user.reset_pass_url}}'] = esc_url( wp_lostpassword_url() ) ?? '';
				}
			}
		}
		$xseeb_content = str_replace( array_keys( $shortcodes ), array_values( $shortcodes ), $xseeb_content );
		return $xseeb_content;
	}
	/**
	 * Replace table data of cart.
	 *
	 * @since    1.0.0
	 * @param object $order Object of order detail.
	 * @param string $xseeb_content Content of email.
	 * @return string $xseeb_content Content of email.
	 */
	public function xseeb_replace_table_data( $order, $xseeb_content ) {
		$xseeb_doc = new DOMDocument();
		$xseeb_doc->loadHTML( $xseeb_content );
		//phpcs:ignore
		$xseeb_doc->formatOutput        = false;
		//phpcs:ignore
		$xseeb_doc->preserveWhiteSpace  = true;
		//phpcs:ignore
		$xseeb_doc->validateOnParse     = false;
		$xseeb_doc->standalone      = true;
		//phpcs:ignore
		$xseeb_doc->strictErrorChecking = false;
		$xseeb_doc->recover             = true;
		$xseeb_xpath                    = new DomXPath( $xseeb_doc );
		if ( $order ) {
			if ( is_a( $order, 'WC_Order' ) ) {
				$xseeb_order_totals = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-order-total')]" );
				foreach ( $xseeb_order_totals as $total ) {
					//phpcs:ignore
					$total->nodeValue = get_woocommerce_currency_symbol() . ' ' . $order->get_total();
				}

				$xseeb_order_subtotals = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-order-subtotal')]" );
				foreach ( $xseeb_order_subtotals as $subtotal ) {
					//phpcs:ignore
					$subtotal->nodeValue = get_woocommerce_currency_symbol() . ' ' . $order->get_subtotal();
				}
				$xseeb_order_discounts = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-order-discount')]" );
				foreach ( $xseeb_order_discounts as $discount ) {
					//phpcs:ignore
					$discount->nodeValue = get_woocommerce_currency_symbol() . ' ' . $order->get_discount_total();
				}
				$xseeb_order_shippings = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-order-shipping')]" );
				foreach ( $xseeb_order_shippings as $shipping ) {
					//phpcs:ignore
					$shipping->nodeValue = get_woocommerce_currency_symbol() . ' ' . $order->get_shipping_total();
				}
				$xseeb_order_taxs = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-order-tax')]" );
				foreach ( $xseeb_order_taxs as $tax ) {
					//phpcs:ignore
					$tax->nodeValue = get_woocommerce_currency_symbol() . ' ' . $order->get_total_tax();
				}
				$item_count                  = count( $order->get_items() );
				$xseeb_order_payment_methods = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-order-payment-method')]" );
				foreach ( $xseeb_order_payment_methods as $method ) {
					//phpcs:ignore
					$method->nodeValue = $order->get_payment_method_title();
				}
				$xseeb_order_full_refunds = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-order-refund-full')]" );
				foreach ( $xseeb_order_full_refunds as $full_refund ) {
					//phpcs:ignore
					$full_refund->nodeValue = get_woocommerce_currency_symbol() . ' ' . $order->get_total_refunded();
				}
				$xseeb_order_par_refunds = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-order-refundpartial')]" );
				foreach ( $xseeb_order_par_refunds as $par_refund ) {
					//phpcs:ignore
					$par_refund->nodeValue = get_woocommerce_currency_symbol() . ' ' . $order->get_total_refunded();
				}
				$xseeb_order_billing = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-billing-address')]" );
				foreach ( $xseeb_order_billing as $addresses ) {
					$xseeb_bill_addresses = $xseeb_xpath->query( $addresses->getNodePath() . '//div' );
					foreach ( $xseeb_bill_addresses as $bill_address ) {
						//phpcs:ignore
						$bill_address->nodeValue = $order->get_formatted_billing_address();
						//phpcs:ignore
						$bill_address->removeChild( $bill_address->firstChild );
						$fragment = $xseeb_doc->createDocumentFragment();
						$fragment->appendXML( $order->get_formatted_billing_address() );
						$bill_address->appendChild( $fragment );

					}
				}
				$xseeb_order_shipping = $xseeb_xpath->query( "//td[contains(@class, 'xseeb-shipping-address')]" );

				foreach ( $xseeb_order_shipping as $addresses ) {
					$xseeb_ship_addresses = $xseeb_xpath->query( $addresses->getNodePath() . '//div' );
					foreach ( $xseeb_ship_addresses as $ship_address ) {
						$shipping_address = $order->get_formatted_shipping_address();
						if ( empty( $shipping_address ) ) {
							$shipping_address = $order->get_formatted_billing_address();
						}
						//phpcs:ignore
						$ship_address->nodeValue = $shipping_address;
						//phpcs:ignore
						$ship_address->removeChild( $ship_address->firstChild );
						$fragment = $xseeb_doc->createDocumentFragment();
						$fragment->appendXML( $shipping_address );
						$ship_address->appendChild( $fragment );

					}
				}

				$xseeb_cart_details = $xseeb_xpath->query( "//tr[contains(@class, 'xseeb-cartdetail-data')]" );
				if ( 0 !== $xseeb_cart_details->length ) {

					$cartdetailproductstylenode  = $xseeb_doc->getElementById( 'xseeb-cartdetailproduct-style' );
					$cartdetailtitlestylenode    = $xseeb_doc->getElementById( 'xseeb-cartdetailtitle-style' );
					$cartdetailquantitystylenode = $xseeb_doc->getElementById( 'xseeb-cartdetailquantity-style' );
					$cartdetailpricestylenode    = $xseeb_doc->getElementById( 'xseeb-cartdetailprice-style' );
					$cartdetailquantitystyle     = '';
					$cartdetailpricestyle        = '';
					$cartdetailproductstyle      = '';
					$cartdetailtitlestyle        = '';
					if ( $cartdetailproductstylenode->hasAttributes() ) {
						$cartdetailproductstyle = $cartdetailproductstylenode->getAttribute( 'style' );
					}
					if ( $cartdetailtitlestylenode->hasAttributes() ) {
						$cartdetailtitlestyle = $cartdetailtitlestylenode->getAttribute( 'style' );
					}
					if ( $cartdetailquantitystylenode->hasAttributes() ) {
						$cartdetailquantitystyle = $cartdetailquantitystylenode->getAttribute( 'style' );
					}
					if ( $cartdetailpricestylenode->hasAttributes() ) {
						$cartdetailpricestyle = $cartdetailpricestylenode->getAttribute( 'style' );
					}
					$table    = '';
					$path     = '';
					$temppath = '';
					foreach ( $xseeb_cart_details as $nodes ) {
						//phpcs:ignore
						$temppath = $nodes->parentNode->getNodePath(); 
						//phpcs:ignore
						$nodes->nodeValue = '';
						//phpcs:ignore
						$table            = $xseeb_xpath->query( $nodes->parentNode->getNodePath() );
						if ( ! empty( $table ) && $path !== $temppath ) {
							$items              = $order->get_items();
							$xseeb_order_object = array();
							$xseeb_cart_table   = '';
							foreach ( $items as $item ) {
								$value   = '';
								$strings = array();
								foreach ( $item->get_formatted_meta_data() as $meta_id => $meta ) {
									$value     = wp_strip_all_tags( $meta->display_value );
									$strings[] = '<span><strong>' . $meta->display_key . ':</strong>' . $value . '</span>';
								}
								$meta               = implode( ',', $strings );
								$xseeb_order_object = $item->get_data();
								$xseeb_cart_table  .= '<tr class="xseeb-cartdetail-data">
										<td style="' . $cartdetailproductstyle . '"><div style="' . $cartdetailtitlestyle . '">' . $xseeb_order_object['name'] . '<br/>' . $meta . '</div></td>
										<td style="' . $cartdetailpricestyle . '">' . get_woocommerce_currency_symbol() . ' ' . $xseeb_order_object['total'] . '</td>
										<td style="' . $cartdetailquantitystyle . '">' . $xseeb_order_object['quantity'] . '</td>
								</tr>';
							}
							foreach ( $table as $node ) {
								$fragment = $xseeb_doc->createDocumentFragment();
								$fragment->appendXML( $xseeb_cart_table );
								$node->appendChild( $fragment );
							}
						}
						//phpcs:ignore
						$path = $nodes->parentNode->getNodePath();
					}
				}
				$xseeb_order_details = $xseeb_xpath->query( "//tr[contains(@class, 'xseeb-orderdetail-data')]" );
				if ( 0 !== $xseeb_order_details->length ) {

					$orderdetailproductstylenode  = $xseeb_doc->getElementById( 'xseeb-orderdetailproduct-style' );
					$orderdetailtitlestylenode    = $xseeb_doc->getElementById( 'xseeb-orderdetailtitle-style' );
					$orderdetailquantitystylenode = $xseeb_doc->getElementById( 'xseeb-orderdetailquantity-style' );
					$orderdetailpricestylenode    = $xseeb_doc->getElementById( 'xseeb-orderdetailprice-style' );
					$orderdetailquantitystyle     = '';
					$orderdetailpricestyle        = '';
					$orderdetailproductstyle      = '';
					$orderdetailtitlestyle        = '';
					if ( $orderdetailproductstylenode->hasAttributes() ) {
						$orderdetailproductstyle = $orderdetailproductstylenode->getAttribute( 'style' );
					}
					if ( $orderdetailtitlestylenode->hasAttributes() ) {
						$orderdetailtitlestyle = $orderdetailtitlestylenode->getAttribute( 'style' );
					}
					if ( $orderdetailquantitystylenode->hasAttributes() ) {
						$orderdetailquantitystyle = $orderdetailquantitystylenode->getAttribute( 'style' );
					}
					if ( $orderdetailpricestylenode->hasAttributes() ) {
						$orderdetailpricestyle = $orderdetailpricestylenode->getAttribute( 'style' );
					}
					$table    = '';
					$path     = '';
					$temppath = '';
					foreach ( $xseeb_order_details as $nodes ) {
						//phpcs:ignore
						$temppath         = $nodes->parentNode->getNodePath(); 
						//phpcs:ignore
						$nodes->nodeValue = '';
						//phpcs:ignore
						$table            = $xseeb_xpath->query( $nodes->parentNode->getNodePath() );
						if ( ! empty( $table ) && $path !== $temppath ) {
							$items              = $order->get_items();
							$xseeb_order_object = array();
							$xseeb_cart_table   = '';
							foreach ( $items as $item ) {
								$value   = '';
								$strings = array();
								foreach ( $item->get_formatted_meta_data() as $meta_id => $meta ) {
									$value     = wp_strip_all_tags( $meta->display_value );
									$strings[] = '<span><strong>' . $meta->display_key . ':</strong>' . $value . '</span>';
								}
								$meta               = implode( ',', $strings );
								$xseeb_order_object = $item->get_data();
								$xseeb_cart_table  .= '<tr class="xseeb-orderdetail-data">
										<td style="' . $orderdetailproductstyle . '"><div style="' . $orderdetailtitlestyle . '">' . $xseeb_order_object['name'] . '<br/>' . $meta . '</div></td>
										<td style="' . $orderdetailpricestyle . '">' . get_woocommerce_currency_symbol() . ' ' . $xseeb_order_object['total'] . '</td>
										<td style="' . $orderdetailquantitystyle . '">' . $xseeb_order_object['quantity'] . '</td>
								</tr>';
							}
							foreach ( $table as $node ) {
								$fragment = $xseeb_doc->createDocumentFragment();
								$fragment->appendXML( $xseeb_cart_table );
								$node->appendChild( $fragment );
							}
						}
						//phpcs:ignore
						$path = $nodes->parentNode->getNodePath();
					}
				}

				$xseeb_order_products = $xseeb_xpath->query( "//tr[contains(@class, 'xseeb-orderproduct-data')]" );
				if ( 0 !== $xseeb_order_products->length ) {
					$cartproductstylenode  = $xseeb_doc->getElementById( 'xseeb-cartproduct-style' );
					$cartimagestylenode    = $xseeb_doc->getElementById( 'xseeb-cartimage-style' );
					$carttitlestylenode    = $xseeb_doc->getElementById( 'xseeb-carttitle-style' );
					$cartquantitystylenode = $xseeb_doc->getElementById( 'xseeb-cartquantity-style' );
					$cartpricestylenode    = $xseeb_doc->getElementById( 'xseeb-cartprice-style' );
					$cartquantitystyle     = '';
					$cartpricestyle        = '';
					$cartproductstyle      = '';
					$cartimagestyle        = '';
					$carttitlestyle        = '';
					if ( $cartproductstylenode->hasAttributes() ) {
						$cartproductstyle = $cartproductstylenode->getAttribute( 'style' );
					}
					if ( $cartimagestylenode->hasAttributes() ) {
						$cartimagestyle = $cartimagestylenode->getAttribute( 'style' );
					}
					if ( $carttitlestylenode->hasAttributes() ) {
						$carttitlestyle = $carttitlestylenode->getAttribute( 'style' );
					}
					if ( $cartquantitystylenode->hasAttributes() ) {
						$cartquantitystyle = $cartquantitystylenode->getAttribute( 'style' );
					}
					if ( $cartpricestylenode->hasAttributes() ) {
						$cartpricestyle = $cartpricestylenode->getAttribute( 'style' );
					}
					$table    = '';
					$path     = '';
					$temppath = '';
					foreach ( $xseeb_order_products as $nodes ) {
						//phpcs:ignore
						$temppath         = $nodes->parentNode->getNodePath(); 
						//phpcs:ignore
						$nodes->nodeValue = '';
						//phpcs:ignore
						$table            = $xseeb_xpath->query( $nodes->parentNode->getNodePath() );
						if ( ! empty( $table ) && $path !== $temppath ) {
							$items              = $order->get_items();
							$xseeb_order_object = array();
							$xseeb_cart_table   = '';
							foreach ( $items as $item ) {
								$value   = '';
								$strings = array();
								foreach ( $item->get_formatted_meta_data() as $meta_id => $meta ) {
									$value     = wp_strip_all_tags( $meta->display_value );
									$strings[] = '<span><strong>' . $meta->display_key . ':</strong>' . $value . '</span>';
								}
								$product_id         = $item['product_id'];
								$product            = wc_get_product( $product_id );
								$meta               = implode( ',', $strings );
								$xseeb_order_object = $item->get_data();
								$xseeb_cart_table  .= '<tr class="xseeb-orderproduct-data">
									<td style="' . $cartproductstyle . '">
										<div style="display:inline-flex;">
											<div style="' . $cartimagestyle . '">
												' . $product->get_image( array( 70, 70 ) ) . '
											</div>
											<div style="' . $carttitlestyle . '">' . $xseeb_order_object['name'] . '<br/>' . $meta . '</div>
										</div>
									</td>
									<td style="' . $cartquantitystyle . '">' . $xseeb_order_object['quantity'] . '</td>
									<td style="' . $cartpricestyle . '">' . get_woocommerce_currency_symbol() . ' ' . $xseeb_order_object['total'] . '</td>
								</tr>';
							}
							foreach ( $table as $node ) {
								$fragment = $xseeb_doc->createDocumentFragment();
								$fragment->appendXML( $xseeb_cart_table );
								$node->appendChild( $fragment );
							}
						}
						//phpcs:ignore
						$path = $nodes->parentNode->getNodePath();
					}
				}

				$xseeb_order_shipped = $xseeb_xpath->query( "//tr[contains(@class, 'xseeb-ordershipped-data')]" );
				if ( 0 !== $xseeb_order_shipped->length ) {
					$cartproductstylenode  = $xseeb_doc->getElementById( 'xseeb-shippedproduct-style' );
					$cartimagestylenode    = $xseeb_doc->getElementById( 'xseeb-shippedimage-style' );
					$carttitlestylenode    = $xseeb_doc->getElementById( 'xseeb-shippedtitle-style' );
					$cartquantitystylenode = $xseeb_doc->getElementById( 'xseeb-shippedquantity-style' );
					$cartpricestylenode    = $xseeb_doc->getElementById( 'xseeb-shippedprice-style' );
					$cartquantitystyle     = '';
					$cartpricestyle        = '';
					$cartproductstyle      = '';
					$cartimagestyle        = '';
					$carttitlestyle        = '';
					if ( $cartproductstylenode->hasAttributes() ) {
						$cartproductstyle = $cartproductstylenode->getAttribute( 'style' );
					}
					if ( $cartimagestylenode->hasAttributes() ) {
						$cartimagestyle = $cartimagestylenode->getAttribute( 'style' );
					}
					if ( $carttitlestylenode->hasAttributes() ) {
						$carttitlestyle = $carttitlestylenode->getAttribute( 'style' );
					}
					if ( $cartquantitystylenode->hasAttributes() ) {
						$cartquantitystyle = $cartquantitystylenode->getAttribute( 'style' );
					}
					if ( $cartpricestylenode->hasAttributes() ) {
						$cartpricestyle = $cartpricestylenode->getAttribute( 'style' );
					}
					$table    = '';
					$path     = '';
					$temppath = '';
					foreach ( $xseeb_order_shipped as $nodes ) {
						//phpcs:ignore
						$temppath         = $nodes->parentNode->getNodePath(); 
						//phpcs:ignore
						$nodes->nodeValue = '';
						//phpcs:ignore
						$table            = $xseeb_xpath->query( $nodes->parentNode->getNodePath() );
						if ( ! empty( $table ) && $path !== $temppath ) {
							$items              = $order->get_items();
							$xseeb_order_object = array();
							$xseeb_cart_table   = '';
							foreach ( $items as $item ) {
								$value   = '';
								$strings = array();
								foreach ( $item->get_formatted_meta_data() as $meta_id => $meta ) {
									$value     = wp_strip_all_tags( $meta->display_value );
									$strings[] = '<span><strong>' . $meta->display_key . ':</strong>' . $value . '</span>';
								}
								$product_id         = $item['product_id'];
								$product            = wc_get_product( $product_id );
								$meta               = implode( ',', $strings );
								$xseeb_order_object = $item->get_data();
								$xseeb_cart_table  .= '<tr class="xseeb-orderproduct-data">
									<td style="' . $cartproductstyle . '">
										<div style="display:inline-flex;">
											<div style="' . $cartimagestyle . '">
												' . $product->get_image( array( 70, 70 ) ) . '
											</div>
											<div style="' . $carttitlestyle . '">' . $xseeb_order_object['name'] . '<br/>' . $meta . '</div>
										</div>
									</td>
									<td style="' . $cartquantitystyle . '">' . $xseeb_order_object['quantity'] . '</td>
									<td style="' . $cartpricestyle . '">' . get_woocommerce_currency_symbol() . ' ' . $xseeb_order_object['total'] . '</td>
								</tr>';
							}
							foreach ( $table as $node ) {
								$fragment = $xseeb_doc->createDocumentFragment();
								$fragment->appendXML( $xseeb_cart_table );
								$node->appendChild( $fragment );
							}
						}
						//phpcs:ignore
						$path = $nodes->parentNode->getNodePath();
					}
				}
			}
		}
		$xseeb_content = $xseeb_doc->saveHTML();
		return $xseeb_content;
	}
	/**
	 * Replace default shortcode.
	 *
	 * @since    1.0.0
	 */
	public function xseeb_default_shortcode_for_replace() {
		$shop_url          = wc_get_page_permalink( 'shop' );
		$myaccount_url     = wc_get_page_permalink( 'myaccount' );
		$checkout_url      = wc_get_checkout_url();
		$shop_country_code = WC()->countries->get_base_country();
		$shop_state_code   = WC()->countries->get_base_state();
		$states            = WC()->countries->get_states( $shop_country_code );
		$shop_state        = ! empty( $states[ $shop_state_code ] ) ? $states[ $shop_state_code ] : '';
		$shop_country      = WC()->countries->countries[ $shop_country_code ];
		return array(
			'{{admin.email}}'           => get_option( 'admin_email' ),
			'{{shop.email}}'            => sanitize_email( get_option( 'woocommerce_email_from_address' ) ),
			'{{site.name}}'             => get_bloginfo( 'name' ),
			'{{site.url}}'              => site_url(),
			'{{home.url}}'              => home_url(),
			'{{shop.url}}'              => $shop_url ? $shop_url : home_url(),
			'{{shop.address1}}'         => sanitize_text_field( get_option( 'woocommerce_store_address' ) ),
			'{{shop.address2}}'         => sanitize_text_field( get_option( 'woocommerce_store_address2' ) ),
			'{{shop.city}}'             => sanitize_text_field( get_option( 'woocommerce_store_city' ) ),
			'{{shop.zip}}'              => sanitize_text_field( get_option( 'woocommerce_store_postcode' ) ),
			'{{shop.state}}'            => $shop_state ? $shop_state : '',
			'{{shop.country}}'          => $shop_country ? $shop_country : '',
			'{{checkout.url}}'          => $checkout_url ? $checkout_url : home_url(),
			'{{customer.name}}'         => '',
			'{{customer.email}}'        => '',
			'{{customer.note}}'         => '',
			'{{myaccount.url}}'         => $myaccount_url ? $myaccount_url : home_url(),
			'{{user.name}}'             => '',
			'{{first.name}}'            => '',
			'{{last.name}}'             => '',
			'{{user.email}}'            => '',
			'{{user.login}}'            => '',
			'{{user.password}}'         => '',
			'{{user.reset_pass_url}}'   => '',
			'{{payment.method}}'        => '',
			'{{payment.url}}'           => '',
			'{{order.id}}'              => '',
			'{{order.number}}'          => '',
			'{{item.count}}'            => '',
			'{{order.note}}'            => '',
			'{{subtotal.price}}'        => '',
			'{{total_price}}'           => '',
			'{{order.date}}'            => '',
			'{{order.fully.refund}}'    => '',
			'{{order.partial.refund}}'  => '',
			'{{order.received.url}}'    => '',
			'{{order.cart}}'            => '',
			'{{order.discount}}'        => '',
			'{{order.shipping}}'        => '',
			'{{order.tax}}'             => '',
			'{{billing.first_name}}'    => '',
			'{{billing.last_name}}'     => '',
			'{{billing.full_name}}'     => '',
			'{{billing.company}}'       => '',
			'{{billing.phone}}'         => '',
			'{{billing.address1}}'      => '',
			'{{billing.address2}}'      => '',
			'{{billing.city}}'          => '',
			'{{billing.state}}'         => '',
			'{{billing.zip}}'           => '',
			'{{billing.country}}'       => '',
			'{{billing.email}}'         => '',
			'{{billing.full_address}'   => '',
			'{{order.shipping_method}}' => '',
			'{{shipping.first_name}}'   => '',
			'{{shipping.last_name}}'    => '',
			'{{shipping.full_name}}'    => '',
			'{{shipping.company}}'      => '',
			'{{shipping.address1}}'     => '',
			'{{shipping.address2}}'     => '',
			'{{shipping.city}}'         => '',
			'{{shipping.state}}'        => '',
			'{{shipping.zip}}'          => '',
			'{{shipping.country}}'      => '',
			'{{shipping.full_address}}' => '',
		);
	}

	/**
	 * Get Suggest Products data function.
	 *
	 * @since    1.0.0
	 * @param object $order_object Object of order detail.
	 * @param string $email_id ID of email.
	 * @param string $preview Preview email string.
	 * @return array $xseeb_postdata Data of email fomart.
	 */
	public function xseeb_suggest_products( $order_object, $email_id, $preview ) {
		if ( '0' === $email_id ) {
			$json = $preview;
		} else {
			$props = get_post_meta( $email_id, 'xseeb-email-content', true );
			$json  = $props;
		}
		$content      = $json['children'];
		$producttypes = array();
		$quantity     = array();
		if ( is_array( $content ) && ! empty( $content ) ) {
			xseeb_traverse_json( $content, $producttypes, $quantity );
		}
		$xseeb_postdata = array();
		if ( empty( $producttypes ) ) {
			$producttypes = array( 'newest' );
		}

		if ( empty( $quantity ) ) {
			$quantity = array( '3' );
		}
		foreach ( $producttypes as $key => $producttype ) {
			$suggest_products = array();
			$return_products  = array();
			$categories       = array();
			$bought_ids       = array();
			$orderby          = 'rand';
			if ( $order_object ) {
				$bought_ids = $this->xseeb_get_bought_ids( $order_object->get_items( 'line_item' ) );
			}
			switch ( $producttype ) {
				case 'related':
					foreach ( $bought_ids as $id ) {
						$suggest_products = array_merge( $suggest_products, wc_get_related_products( $id ) );
					}
					break;
				case 'on_sale':
					$suggest_products = wc_get_product_ids_on_sale();
					break;

				case 'up_sell':
					foreach ( $bought_ids as $id ) {
						$upsel_ids = get_post_meta( $id, '_upsell_ids', true );
						if ( is_array( $upsel_ids ) && count( $upsel_ids ) ) {
							$suggest_products = array_merge( $suggest_products, $upsel_ids );
						}
					}
					break;

				case 'cross_sell':
					foreach ( $bought_ids as $id ) {
						$crosssell_ids = get_post_meta( $id, '_crosssell_ids', true );
						if ( is_array( $crosssell_ids ) && count( $crosssell_ids ) ) {
							$suggest_products = array_merge( $suggest_products, $crosssell_ids );
						}
					}
					break;

				case 'category':
					foreach ( $bought_ids as $id ) {
						$cats = get_the_terms( $id, 'product_cat' );
						if ( is_array( $cats ) && count( $cats ) ) {
							foreach ( $cats as $cat ) {
								$categories[] = $cat->slug;
							}
						}
					}
					break;

				case 'featured':
					$suggest_products = wc_get_featured_product_ids();
					break;

				case 'best_seller':
					$args  = array(
						'post_type'      => 'product',
					//phpcs:ignore
					'meta_key'       => 'total_sales',
						'orderby'        => 'meta_value_num',
						'posts_per_page' => $quantity[ $key ],
					);
					$query = new WP_Query( $args );
					if ( is_wp_error( $query ) ) {
						break;
					}
					$products = $query->get_posts();
					if ( is_array( $products ) && count( $products ) ) {
						foreach ( $products as $product ) {
							$suggest_products[] = $product->ID;
						}
					}
					break;

				case 'best_rated':
					$args  = array(
						'post_type'      => 'product',
					//phpcs:ignore
					'meta_key'       => '_wc_average_rating',
						'orderby'        => 'meta_value_num',
						'posts_per_page' => $quantity[ $key ],
					);
					$query = new WP_Query( $args );
					if ( is_wp_error( $query ) ) {
						break;
					}
					$products = $query->get_posts();
					if ( is_array( $products ) && count( $products ) ) {
						foreach ( $products as $product ) {
							$suggest_products[] = $product->ID;
						}
					}
					break;

				case 'newest':
					$orderby = 'date';
					break;
			}
			$categories       = array_unique( $categories );
			$suggest_products = array_slice( array_unique( $suggest_products ), 0, $quantity[ $key ] );
			$xseeb_args       = array(
				'status'       => 'publish',
				'limit'        => $quantity[ $key ],
				'include'      => $suggest_products,
				'category'     => $categories,
				'orderby'      => $orderby,
				'order'        => 'DESC',
				'stock_status' => 'instock',
			);
			$suggest_products = wc_get_products( $xseeb_args );
			$xseeb_currencey  = get_woocommerce_currency_symbol();
			if ( ! empty( $suggest_products ) ) {
				foreach ( $suggest_products as $product ) {
					$image                    = wp_get_attachment_image_url( $product->get_image_id(), 'woocommerce_thumbnail' );
					$image_url                = $image ? $image : wc_placeholder_img_src( 'woocommerce_thumbnail' );
					$url                      = $product->get_permalink();
					$pid                      = $product->get_id();
					$xseeb_postdata[ $key ][] = array(
						'xseeb_currencey' => $xseeb_currencey,
						'xseeb_price'     => $product->get_price(),
						'xseeb_links'     => $url,
						'xseeb_image'     => $image_url,
						'xseeb_title'     => $product->get_name(),
					);

				}
			}
		}
		return $xseeb_postdata;
	}

	/**
	 * Get bought product ids.
	 *
	 * @since    1.0.0
	 * @param array $line_items Array of Order Items.
	 * @return array $bought Array of Order Items ids.
	 */
	public function xseeb_get_bought_ids( $line_items ) {
		$bought = array();
		foreach ( $line_items as $item ) {
			$item_data = $item->get_data();
			$p_id      = $item_data['product_id'];
			$bought[]  = $p_id;
		}
		return $bought;
	}

	/**
	 * Replace Product data function.
	 *
	 * @since    1.0.0
	 * @param object  $order_object Object of order detail.
	 * @param string  $xseeb_content Content of email.
	 * @param integer $email_id ID of email.
	 * @param string  $preview Preview email string.
	 * @return string $xseeb_html Html of email fomart.
	 */
	public function xseeb_replace_products( $order_object, $xseeb_content, $email_id, $preview = null ) {
		$xseeb_suggestproducts = $this->xseeb_suggest_products( $order_object, $email_id, $preview );
		$xseeb_doc             = new DOMDocument();
		$xseeb_doc->loadHTML( $xseeb_content );
		$xseeb_xpath     = new DomXPath( $xseeb_doc );
		$xseeb_pnodelist = $xseeb_xpath->query( "//div[contains(@class, 'xseeb-product-node')]" );
		foreach ( $xseeb_pnodelist as $xseeb_pkey => $xseeb_pnode ) {
			$xseeb_postdata = $xseeb_suggestproducts[ $xseeb_pkey ];
			$xseeb_nodelist = $xseeb_xpath->query( $xseeb_pnode->getNodePath() . "//div[contains(@class, 'xseeb-products')]" );
			foreach ( $xseeb_nodelist as $xseeb_key => $xseeb_node ) {
				if ( isset( $xseeb_postdata[ $xseeb_key ] ) ) {
					$xseeb_child_title = $xseeb_xpath->query( $xseeb_node->getNodePath() . "//td[contains(@class, 'xseeb-title')]" );
					$xseeb_child_price = $xseeb_xpath->query( $xseeb_node->getNodePath() . "//td[contains(@class, 'xseeb-price')]" );
					$xseeb_child_image = $xseeb_xpath->query( $xseeb_node->getNodePath() . '//img' );
					$xseeb_child_a_tag = $xseeb_xpath->query( $xseeb_node->getNodePath() . '//a' );
					foreach ( $xseeb_child_price as $xseeb_node_2 ) {
						$xseeb_child_price_2 = $xseeb_xpath->query( $xseeb_node_2->getNodePath() . '//div' );

						foreach ( $xseeb_child_price_2 as $xseeb_node_3 ) {
							//phpcs:ignore
							$xseeb_node_3->nodeValue = sanitize_text_field( $xseeb_postdata[ $xseeb_key ]['xseeb_currencey'] ) . '' . esc_attr( $xseeb_postdata[ $xseeb_key ]['xseeb_price'] );
						}
					}
					foreach ( $xseeb_child_title as $xseeb_node_3 ) {
						$xseeb_child_title_2 = $xseeb_xpath->query( $xseeb_node_3->getNodePath() . '//div' );

						foreach ( $xseeb_child_title_2 as $xseeb_node_3 ) {
							//phpcs:ignore
							$xseeb_node_3->nodeValue = sanitize_text_field( mb_strimwidth( $xseeb_postdata[ $xseeb_key ]['xseeb_title'], 0, 25, '...' ) );
						}
					}
					foreach ( $xseeb_child_image as $xseeb_node_4 ) {
						if ( $xseeb_postdata[ $xseeb_key ]['xseeb_image'] ) {
							$xseeb_node_4->setAttribute( 'src', sanitize_url( $xseeb_postdata[ $xseeb_key ]['xseeb_image'] ) );
						}
					}
					foreach ( $xseeb_child_a_tag as $xseeb_node_5 ) {
						$xseeb_node_5->setAttribute( 'href', sanitize_url( $xseeb_postdata[ $xseeb_key ]['xseeb_links'] ) );
					}
				}
			}
		}
		$xseeb_html = $xseeb_doc->saveHTML();
		return $xseeb_html;
	}

	/**
	 * Send Support email function.
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public function xseeb_send_mail() {
		$data = array();
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}
		if ( ! isset( $_POST['_xseeb_support_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['_xseeb_support_nonce'] ) ), 'xseeb_support' ) ) {
			return;
		}
		if ( isset( $_POST['data'] ) && ! empty( $_POST['data'] ) ) {
			//phpcs:ignore
			parse_str( sanitize_text_field( $_POST['data'] ), $data );
			$data['plugin_name'] = 'Easy Email Builder';
			$data['version']     = 'Pro Version';
			$data['website']     = ( isset( $_SERVER['HTTPS'] ) && 'on' === $_SERVER['HTTPS'] ? 'https' : 'http' ) . '://';
			$data['website']    .= ( isset( $_SERVER['HTTP_HOST'] ) ) ? sanitize_url( wp_unslash( $_SERVER['HTTP_HOST'] ) ) : '';
			$to                  = 'xfinitysoft@gmail.com';
			switch ( $data['type'] ) {
				case 'report':
					$subject = 'Report a bug';
					break;
				case 'hire':
					$subject = 'Hire us';
					break;

				default:
					$subject = 'Request a Feature';
					break;
			}
			$body        = '<html><body><table>';
			$body       .= '<tbody>';
			$body       .= '<tr><th>User Name</th><td>' . $data['xseeb_name'] . '</td></tr>';
			$body       .= '<tr><th>User email</th><td>' . $data['xseeb_email'] . '</td></tr>';
			$body       .= '<tr><th>Plugin Name</th><td>' . $data['plugin_name'] . '</td></tr>';
			$body       .= '<tr><th>Version</th><td>' . $data['version'] . '</td></tr>';
			$body       .= '<tr><th>Website</th><td><a href="' . $data['website'] . '">' . $data['website'] . '</a></td></tr>';
			$body       .= '<tr><th>Message</th><td>' . $data['xseeb_message'] . '</td></tr>';
			$body       .= '</tbody>';
			$body       .= '</table></body></html>';
			$admin_email = get_option( 'admin_email' );
			$headers     = array( 'From: ' . $data['xseeb_name'] . ' <' . $admin_email . '>', 'Reply-To: ' . $data['xseeb_name'] . ' <' . $data['xseeb_email'] . '>', 'Content-Type: text/html; charset=UTF-8' );
			if ( wp_mail( $to, $subject, $body, $headers ) ) {
				wp_send_json( array( 'status' => true ) );
			} else {
				wp_send_json( array( 'status' => false ) );
			}
			wp_die();
		}
	}
}
