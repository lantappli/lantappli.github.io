// Façade : le lecteur YouTube (sans cookies) n'est chargé qu'au clic.
document.querySelectorAll('.player[data-youtube]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var id = encodeURIComponent(btn.dataset.youtube);
    var wrap = document.createElement('div');
    wrap.className = 'player player--live';
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
    iframe.title = btn.getAttribute('aria-label') || 'Vidéo';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    wrap.appendChild(iframe);
    btn.replaceWith(wrap);
  });
});
