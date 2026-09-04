(function () {
  var header =
    "" +
    '<header class="site-header">' +
    '<div class="utility-bar"><div class="container"><span>Free delivery on orders over $500</span><span class="utility-links"><a href="track-orders.html">Track order</a><a href="contact.html">Support</a></span></div></div>' +
    '<div class="main-header"><div class="container"><div class="row">' +
    '<div class="col-sm-3 col-xs-12"><a class="brand" href="index.html"><strong>TECH<span>ZONE</span></strong><small>LAPTOPS &amp; COMPUTING</small></a></div>' +
    '<div class="col-sm-6 col-xs-12"><form class="search-form" id="search-form"><input id="search-input" type="search" placeholder="Search laptops, GPUs, monitors..." aria-label="Search products"><button type="submit" aria-label="Search"><i class="fa fa-search"></i></button></form></div>' +
    '<div class="col-sm-3 col-xs-12"><div class="header-actions"><a class="header-action" href="sign-in.html"><i class="fa fa-user-o"></i><span>Account</span></a><a class="header-action" href="shopping-cart.html"><i class="fa fa-shopping-bag"></i><b class="cart-count">2</b><span>Cart</span></a></div></div>' +
    "</div></div></div>" +
    '<nav class="main-nav"><div class="container"><a href="index.html">Home</a><a href="#deals">Special offers</a><a href="#products">All products</a><a href="category.html">Gaming</a><a href="category.html">Business</a><a href="contact.html">Contact</a></div></nav>' +
    "</header>";

  var footer =
    "" +
    '<footer class="site-footer"><div class="container"><div class="row">' +
    '<div class="col-sm-4"><a class="brand" href="index.html"><strong>TECH<span>ZONE</span></strong><small>LAPTOPS &amp; COMPUTING</small></a></div>' +
    '<div class="col-sm-4 footer-links"><h3>Store</h3><a href="category.html">Shop laptops</a><a href="my-wishlist.html">Wishlist</a><a href="track-orders.html">Track an order</a></div>' +
    '<div class="col-sm-4 footer-links"><h3>Help</h3><a href="contact.html">Contact support</a><a href="faq.html">FAQs</a><a href="terms-conditions.html">Terms &amp; conditions</a></div>' +
    '</div><div class="footer-bottom row"><div class="col-sm-7">&copy; 2026 TechZone. Performance, without compromise.</div><div class="col-sm-5 payments" aria-label="Accepted payment methods"><i class="fa fa-cc-visa"></i><i class="fa fa-cc-mastercard"></i><i class="fa fa-cc-amex"></i><i class="fa fa-cc-paypal"></i></div></div></div></footer>';

  function syncShell() {
    var oldHeaders = document.querySelectorAll("body > header");
    var oldFooter = document.querySelector("body > footer");
    for (var index = 0; index < oldHeaders.length; index += 1) {
      var oldHeader = oldHeaders[index];
      if (!oldHeader.classList.contains("site-header")) {
        oldHeader.outerHTML = header;
      }
    }
    if (!document.querySelector("body > .site-header")) {
      document.body.insertAdjacentHTML("afterbegin", header);
    }
    if (oldFooter && !oldFooter.classList.contains("site-footer")) {
      oldFooter.outerHTML = footer;
    }
    if (!document.querySelector("body > .site-footer")) {
      document.body.insertAdjacentHTML("beforeend", footer);
    }
    var bodyContent = document.querySelector("body > .body-content");
    if (bodyContent) {
      bodyContent.classList.add("main-content");
    }
    var legacySelectors = [
      ".sidebar",
      ".side-menu",
      ".sidebar-module-container",
      ".sidebar-filter",
      "#brands-carousel",
      ".category-carousel",
    ];
    for (
      var selectorIndex = 0;
      selectorIndex < legacySelectors.length;
      selectorIndex += 1
    ) {
      var legacyElements = document.querySelectorAll(
        legacySelectors[selectorIndex],
      );
      for (
        var elementIndex = 0;
        elementIndex < legacyElements.length;
        elementIndex += 1
      ) {
        legacyElements[elementIndex].parentNode.removeChild(
          legacyElements[elementIndex],
        );
      }
    }
    var productColumns = document.querySelectorAll(".rht-col");
    for (
      var productIndex = 0;
      productIndex < productColumns.length;
      productIndex += 1
    ) {
      productColumns[productIndex].className = productColumns[
        productIndex
      ].className
        .replace(/\bcol-md-9\b/g, "col-md-12")
        .replace(/\bcol-sm-9\b/g, "col-sm-12");
    }
    document.body.classList.add("techzone-page");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncShell);
  } else {
    syncShell();
  }
})();
