<?php
/**
 * The Common functionality of the plugin.
 *
 * @link       https://www.xfinitysoft.com
 * @since      1.0.0
 *
 * @package    Easy_Email_Builder
 * @subpackage Easy_Email_Builder/common
 */

// Check if the function exists before declaring it.
if ( ! function_exists( 'xseeb_traverse_json' ) ) {
	/**
	 * Traverse JSON for product types and quantities.
	 *
	 * @param array $content Array of content nodes.
	 * @param array &$producttypes Reference to product types array.
	 * @param array &$quantity Reference to quantity array.
	 */
	function xseeb_traverse_json( $content, &$producttypes, &$quantity ) {
		foreach ( $content as $node ) {
			if ( isset( $node['type'] ) && 'Products' === $node['type'] ) {
				$producttypes[] = $node['data']['value']['producttype'] ?? 'newest';
				$quantity[]     = $node['data']['value']['quantity'] ?? 3;
			}

			if ( isset( $node['children'] ) && is_array( $node['children'] ) ) {
				xseeb_traverse_json( $node['children'], $producttypes, $quantity );
			}
		}
	}
}
