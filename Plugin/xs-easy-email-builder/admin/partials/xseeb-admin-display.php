<?php
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://www.xfinitysoft.com
 * @since      1.0.0
 *
 * @package    Easy_Email_Builder
 * @subpackage Easy_Email_Builder/admin/partials
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div id="xseeb-root">
	<div id="xseeb-loader">
		<p style="font-size: 24px; color: rgba(0, 0, 0, 0.65)">
			<?php esc_html_e( 'Please wait a moment.', 'xs-easy-email-builder' ); ?>
		</p>
	</div>
</div>
