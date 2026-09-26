(function () {
  // Scroll reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(function (el, i) {
      el.style.transitionDelay = ((i % 4) * 90) + 'ms';
      io.observe(el);
    });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Mobile nav
  var btn = document.querySelector('[data-menu-btn]');
  var menu = document.querySelector('[data-menu]');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!open));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.add('hidden'); });
    });
  }

  // Confirmation messages after Netlify form submissions
  var params = new URLSearchParams(window.location.search);
  if (params.get('subscribed') === 'true') {
    var subscriptionMessage = document.querySelector('[data-subscription-success]');
    if (subscriptionMessage) subscriptionMessage.classList.remove('hidden');
  }
})();
