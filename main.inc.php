<?php
/*
Plugin Name: PhotoSwipe Download Button
Version: 1.0
Description: Adds a download button to the PhotoSwipe interface for Piwigo. Users can download the original file without opening the preview (a hack until PhotoSwipe provides an official solution).
Plugin URI: https://github.com/Adridot/piwigo-photoswipe-download-button
Author: Adridot
Author URI: https://github.com/adridot
*/

if (!defined('PHPWG_ROOT_PATH')) {
  die('Hacking attempt!');
}

define('PHOTOSWIPE_DOWNLOAD_ID', basename(dirname(__FILE__)));

include_once(PHPWG_ROOT_PATH.'plugins/'.PHOTOSWIPE_DOWNLOAD_ID.'/plugin.inc.php');

add_event_handler('loc_end_page_header', 'psdownload_add_assets');

load_language('plugin.lang', PHPWG_ROOT_PATH);