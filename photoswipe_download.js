document.addEventListener('DOMContentLoaded', function() {

  function injectDownloadButton() {
    var topBar = document.querySelector('.pswp__top-bar');
    if (!topBar) {
      return;
    }
    if (document.querySelector('.my-download-button')) {
      return;
    }
    var downloadBtn = document.createElement('button');
    downloadBtn.className = 'my-download-button pswp__button';
    downloadBtn.title = psdownloadLang.downloadButtonTitle;
    downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      var url = downloadBtn.getAttribute('data-download-url');
      if (url) {
        window.open(url);
      } else {
        alert(psdownloadLang.downloadAlert);
      }
    });
    var fullscreenBtn = document.querySelector('.pswp__button--fs');
    if (fullscreenBtn && fullscreenBtn.nextSibling) {
      topBar.insertBefore(downloadBtn, fullscreenBtn.nextSibling);
    } else {
      topBar.appendChild(downloadBtn);
    }
  }

  function updateDownloadUrl() {
    var linkElem = document.querySelector('.pswp__caption:not(.pswp__caption--fake) > .pswp__caption__center a');
    if (!linkElem || !linkElem.href) {
      return;
    }
    var match = linkElem.href.match(/picture\.php\?\/(\d+)(?:\/|$)/);
    if (match && match[1]) {
      var imageId = match[1];
      var downloadUrl = 'action.php?id=' + imageId + '&part=e&download';
      var downloadBtn = document.querySelector('.my-download-button');
      if (downloadBtn) {
        downloadBtn.setAttribute('data-download-url', downloadUrl);
      }
    } else {
      var downloadBtn = document.querySelector('.my-download-button');
      if (downloadBtn) {
        downloadBtn.removeAttribute('data-download-url');
      }
    }
  }

  function setupObserver() {
    var captionCenter = document.querySelector('.pswp__caption:not(.pswp__caption--fake) > .pswp__caption__center');
    if (!captionCenter) {
      return;
    }
    var observer = new MutationObserver(function(mutationsList, observer) {
      updateDownloadUrl();
    });
    observer.observe(captionCenter, { childList: true, subtree: true });
  }

  injectDownloadButton();
  setupObserver();
});