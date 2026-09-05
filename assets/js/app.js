(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var cartCounts = document.querySelectorAll(".cart-count");
  var toastTimer;
  var storedCartCount = Number(
    window.localStorage.getItem("lifeCompCartCount"),
  );
  var cartCount = Number.isFinite(storedCartCount) ? storedCartCount : 2;

  function updateCartCount() {
    cartCounts.forEach(function (count) {
      count.textContent = cartCount;
    });
    window.localStorage.setItem("lifeCompCartCount", String(cartCount));
  }

  function showToast(message) {
    var toast = document.querySelector(".modern-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "modern-toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    window.clearTimeout(toastTimer);
    window.requestAnimationFrame(function () {
      toast.classList.add("is-visible");
    });
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2600);
  }

  function setupStickyHeader() {
    if (!header) return;
    var updateHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  function setupMobileNavigation() {
    if (!header) return;
    var nav = header.querySelector(".main-nav");
    var mainHeader = header.querySelector(".main-header .container");
    var headerRow = mainHeader && mainHeader.querySelector(".row");
    if (
      !nav ||
      !mainHeader ||
      !headerRow ||
      headerRow.querySelector(".mobile-nav-toggle")
    )
      return;

    var toggle = document.createElement("button");
    toggle.className = "mobile-nav-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Toggle navigation");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    headerRow.appendChild(toggle);

    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.innerHTML = isOpen
        ? '<i class="fa fa-close" aria-hidden="true"></i>'
        : '<i class="fa fa-bars" aria-hidden="true"></i>';
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
      }
    });
  }

  function setupCartActions() {
    document.querySelectorAll("a, button").forEach(function (control) {
      if (!/add\s*to\s*cart/i.test(control.textContent)) return;
      control.addEventListener("click", function (event) {
        event.preventDefault();
        cartCount += 1;
        updateCartCount();
        showToast("Added to cart. Your selection is ready when you are.");
      });
    });
    updateCartCount();
  }

  function setupSearch() {
    var form = document.querySelector("#search-form");
    var input = document.querySelector("#search-input");
    if (!form || !input) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var query = input.value.trim().toLowerCase();
      var cards = document.querySelectorAll(".tech-card");
      if (!query) {
        cards.forEach(function (card) {
          card.hidden = false;
        });
        return;
      }
      cards.forEach(function (card) {
        card.hidden = !card.textContent.toLowerCase().includes(query);
      });
      var products = document.querySelector("#products");
      if (products)
        products.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function setupFilters() {
    document.querySelectorAll(".tech-grid").forEach(function (grid) {
      var cards = Array.prototype.slice.call(
        grid.querySelectorAll(".tech-card"),
      );
      if (
        cards.length < 2 ||
        grid.parentElement.querySelector(".modern-filter-bar")
      )
        return;

      var filterBar = document.createElement("div");
      filterBar.className = "modern-filter-bar";
      filterBar.setAttribute("aria-label", "Filter products");
      ["All products", "Special offers", "Gaming", "Business"].forEach(
        function (label, index) {
          var filter = document.createElement("button");
          filter.className =
            "modern-filter" + (index === 0 ? " is-active" : "");
          filter.type = "button";
          filter.textContent = label;
          filter.dataset.filter = label.toLowerCase();
          filterBar.appendChild(filter);
        },
      );
      grid.parentElement.insertBefore(filterBar, grid);

      filterBar.addEventListener("click", function (event) {
        var filter = event.target.closest(".modern-filter");
        if (!filter) return;
        filterBar.querySelectorAll(".modern-filter").forEach(function (button) {
          var mainHeader = header.querySelector(".main-header .container");
          var headerRow = mainHeader && mainHeader.querySelector(".row");
        });
        var selected = filter.dataset.filter;
        cards.forEach(function (card) {
          headerRow.appendChild(toggle);
          var visible =
            selected === "all products" ||
            (selected === "special offers" && card.querySelector(".badge")) ||
            (selected !== "special offers" &&
              selected !== "all products" &&
              text.includes(selected));
          card.hidden = !visible;
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupStickyHeader();
    setupMobileNavigation();
    setupCartActions();
    setupSearch();
    setupFilters();
  });
})();
