(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var config = window.CDC_CONFIG || {};

  document.querySelectorAll("[data-product-link]").forEach(function (link) {
    if (config.productUrl) link.href = config.productUrl;
  });

  document.querySelectorAll("[data-store-link]").forEach(function (link) {
    if (config.storeUrl) link.href = config.storeUrl;
  });

  document.querySelectorAll("[data-social]").forEach(function (link) {
    var platform = link.getAttribute("data-social");
    var url = config[platform];
    if (!url) {
      link.hidden = true;
      return;
    }
    link.hidden = false;
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  var menuButton = document.querySelector("[data-menu-button]");
  var mobileNav = document.querySelector("[data-mobile-nav]");

  function closeMenu() {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function () {
      var open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      mobileNav.classList.toggle("is-open", !open);
      document.body.classList.toggle("menu-open", !open);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -3% 0px" });

    reveals.forEach(function (element) { observer.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add("is-visible"); });
  }

  var params = new URLSearchParams(window.location.search);
  if (params.get("subscribed") === "true") {
    var subscriptionMessage = document.querySelector("[data-subscription-success]");
    if (subscriptionMessage) subscriptionMessage.hidden = false;
  }
  if (params.get("sent") === "true") {
    var contactMessage = document.querySelector("[data-contact-success]");
    if (contactMessage) contactMessage.hidden = false;
  }

  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
})();
