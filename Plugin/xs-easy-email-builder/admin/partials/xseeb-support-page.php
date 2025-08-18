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

$selected_tab = 'report';
if ( isset( $_GET['_wpnonce'] ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $_GET['_wpnonce'] ) ), 'xseeb-setting' ) ) {
	if ( isset( $_GET['tab'] ) && ! empty( $_GET['tab'] ) ) {
		$selected_tab = sanitize_text_field( wp_unslash( $_GET['tab'] ) );
	}
}
?>
<div class="warp">
	<div id="icon-options-general" class="icon32"></div>
	<h1>
		<?php esc_html_e( 'Support', 'xs-easy-email-builder' ); ?>
	</h1>
	<?php wp_nonce_field( 'xseeb_support', '_xseeb_support_nonce', true ); ?>
	<nav class="nav-tab-wrapper wp-clearfix" aria-label="Secondary menu">
		<a class="nav-tab <?php echo ( 'report' === $selected_tab ) ? 'nav-tab-active' : ''; ?>" href=<?php echo esc_url( wp_nonce_url( '?page=xseeb-support&tab=report', 'xseeb-setting' ) ); ?> class="nav-tab">
			<?php esc_html_e( 'Report a bug', 'xs-easy-email-builder' ); ?>
		</a>
		<a class="nav-tab <?php echo ( 'request' === $selected_tab ) ? 'nav-tab-active' : ''; ?>" href=<?php echo esc_url( wp_nonce_url( '?page=xseeb-support&tab=request', 'xseeb-setting' ) ); ?> class="nav-tab">
			<?php esc_html_e( 'Request a Feature', 'xs-easy-email-builder' ); ?>
		</a>
		<a class="nav-tab <?php echo ( 'hire' === $selected_tab ) ? 'nav-tab-active' : ''; ?>" href=<?php echo esc_url( wp_nonce_url( '?page=xseeb-support&tab=hire', 'xseeb-setting' ) ); ?> class="nav-tab">
			<?php esc_html_e( 'Hire US', 'xs-easy-email-builder' ); ?>
		</a>
		<a class="nav-tab <?php echo ( 'review' === $selected_tab ) ? 'nav-tab-active' : ''; ?>" href=<?php echo esc_url( wp_nonce_url( '?page=xseeb-support&tab=review', 'xseeb-setting' ) ); ?> class="nav-tab">
			<?php esc_html_e( 'Review', 'xs-easy-email-builder' ); ?>
		</a>
	</nav>
	<div class="tab-content">
		<?php
		switch ( $selected_tab ) {
			case 'request':
				?>
				<div class="xs-send-email-notice xseeb-top-margin">
					<p></p>
					<button type="button" class="notice-dismiss xs-notice-dismiss"><span class="screen-reader-text"><?php esc_html_e( 'Dismiss this notice.', 'xs-easy-email-builder' ); ?></span></button>
				</div>
				<form method="post" class="xseeb_support_form">
					<input type="hidden" name="type" value="request">
					<table class="form-table">
						<tbody>
							<tr valign="top">
								<th>
									<label for='xseeb_name'><?php esc_html_e( 'Your Name:', 'xs-easy-email-builder' ); ?></label>
								</th>
								<td>
									<input type="text" id="xseeb_name" name="xseeb_name" required>
								</td>
							</tr>
							<tr valign="top">
								<th>
									<label for="xseeb_email"><?php esc_html_e( 'Your Email:', 'xs-easy-email-builder' ); ?></label>
								</th>
								<td>
									<input type="email" id="xseeb_email" name="xseeb_email" required>
								</td>
							</tr>
							<tr valign="top">
								<th>
									<label for="xseeb_message"><?php esc_html_e( 'Message:', 'xs-easy-email-builder' ); ?></label>
								</th>
								<td>
									<textarea id="xseeb_message" name="xseeb_message" rows="12", cols="47" required></textarea>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="input-group">
						<?php submit_button( __( 'Send', 'xs-easy-email-builder' ), 'primary xseeb-send-mail' ); ?>
						<span class="spinner xseeb-mail-spinner"></span> 
					</div>
					
				</form>
				<?php
				break;
			case 'hire':
				?>
				<h2 class="xseeb-top-margin"><?php esc_html_e( 'Hire us for Customization and Development of WordPress Plugins and Themes.', 'xs-easy-email-builder' ); ?></h2>
				<div class="xs-send-email-notice xseeb-top-margin">
					<p></p>
					<button type="button" class="notice-dismiss xs-notice-dismiss"><span class="screen-reader-text"><?php esc_html_e( 'Dismiss this notice.', 'xs-easy-email-builder' ); ?></span></button>
				</div>
				<form method="post" class="xseeb_support_form">
					<input type="hidden" name="type" value="hire">
					<table class="form-table">
						<tbody>
							<tr valign="top">
								<th>
									<label for='xseeb_name'><?php esc_html_e( 'Your Name:', 'xs-easy-email-builder' ); ?></label>
								</th>
								<td>
									<input type="text" id="xseeb_name" name="xseeb_name" required="required">
								</td>
							</tr>
							<tr valign="top">
								<th>
									<label for="xseeb_email"><?php esc_html_e( 'Your Email:', 'xs-easy-email-builder' ); ?></label>
								</th>
								<td>
									<input type="email" id="xseeb_email" name="xseeb_email" required="required">
								</td>
							</tr>
							<tr valign="top">
								<th>
									<label for="xseeb_message"><?php esc_html_e( 'Message:', 'xs-easy-email-builder' ); ?></label>
								</th>
								<td>
									<textarea id="xseeb_message" name="xseeb_message" rows="12", cols="47" required="required"></textarea>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="input-group">
						<?php submit_button( __( 'Send', 'xs-easy-email-builder' ), 'primary xseeb-send-mail' ); ?>
						<span class="spinner xseeb-mail-spinner"></span> 
					</div>
				</form>
				<?php
				break;
			case 'review':
				?>
				<p class="about-description xseeb-top-margin"><?php esc_html_e( 'If you like our plugin and support than kindly share your  ', 'xs-easy-email-builder' ); ?> <a href="https://codecanyon.net/item/easymail-woocommerce-email-template-customizer/36924704" target="_blank"> <?php esc_html_e( 'feedback', 'xs-easy-email-builder' ); ?> </a><?php esc_html_e( 'Your feedback is valuable.', 'xs-easy-email-builder' ); ?> </p>
				<?php
				break;
			default:
				?>
				<div class="xs-send-email-notice xseeb-top-margin">
					<p></p>
					<button type="button" class="notice-dismiss xs-notice-dismiss"><span class="screen-reader-text"><?php esc_html_e( 'Dismiss this notice.', 'xs-easy-email-builder' ); ?></span></button>
				</div>
				<form method="post" class="xseeb_support_form">
					<input type="hidden" name="type" value="report">
					<table class="form-table">
						<tbody>
							<tr valign="top">
								<th>
									<label for='xseeb_name'><?php esc_html_e( 'Your Name:', 'xs-easy-email-builder' ); ?></label>
								</th>
								<td>
									<input type="text" id="xseeb_name" name="xseeb_name" required="required">
								</td>
							</tr>
							<tr valign="top">
								<th>
									<label for="xseeb_email"><?php esc_html_e( 'Your Email:', 'xs-easy-email-builder' ); ?></label>
								</th>
								<td>
									<input type="email" id="xseeb_email" name="xseeb_email" required="required">
								</td>
							</tr>
							<tr valign="top">
								<th>
									<label for="xseeb_message"><?php esc_html_e( 'Message:', 'xs-easy-email-builder' ); ?></label>
								</th>
								<td>
									<textarea id="xseeb_message" name="xseeb_message" rows="12", cols="47" required="required"></textarea>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="input-group">
						<?php submit_button( __( 'Send', 'xs-easy-email-builder' ), 'primary xseeb-send-mail' ); ?>
						<span class="spinner xseeb-mail-spinner"></span> 
					</div>
					
				</form>
				
				<?php
				break;
		}
		?>
	</div>
</div>
