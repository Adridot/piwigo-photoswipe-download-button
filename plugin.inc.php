<?php

function psdownload_add_assets() {
  $plugin_path = get_root_url().'plugins/'.PHOTOSWIPE_DOWNLOAD_ID;

  echo "\n<!-- PhotoSwipe Download Button plugin -->\n";
  echo '<script type="text/javascript">';
  echo 'var psdownloadLang = {';
  echo 'downloadButtonTitle: "' . l10n('Download button tooltip') . '",';
  echo 'downloadAlert: "' . l10n('No image selected') . '"';
  echo '};';
  echo '</script>';
  echo '<script type="text/javascript" src="'.$plugin_path.'/photoswipe_download.js"></script>'."\n";
  echo '<link rel="stylesheet" type="text/css" href="'.$plugin_path.'/photoswipe_download.css" />'."\n";
}