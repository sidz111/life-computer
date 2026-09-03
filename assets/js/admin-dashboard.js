(function () {
  "use strict";
  var menuButton = document.querySelector(".admin-menu-toggle");
  var sidebar = document.querySelector(".admin-sidebar");
  var filter = document.querySelector("#order-filter");

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }

  if (filter) {
    filter.addEventListener("change", function () {
      var rows = document.querySelectorAll("#orders tbody tr");
      rows.forEach(function (row) {
        row.hidden =
          filter.value !== "all" && row.dataset.status !== filter.value;
      });
    });
  }
})();
