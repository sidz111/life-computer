(function () {
  "use strict";
  var products = [
    "Velocity Pro 16 | Intel Core i9 | RTX 4070",
    "ZenBook Air 14 | Intel Core i7 | 16GB RAM",
    "Aero Student 15 | Ryzen 5 | 512GB SSD",
    "RTX Studio X1 | Core i7 | 32GB RAM",
    "Titan Gaming 17 | Ryzen 9 | RTX 4080",
    "CreatorBook 14 | Core Ultra 7 | OLED",
    "WorkMate Pro | Core i7 | 1TB SSD",
    "Mechanical K2 Keyboard",
    "UltraView 27-inch 144Hz Monitor",
    "HyperDrive 2TB NVMe SSD",
    "ProClick Wireless Mouse",
    "StreamCam 4K Webcam",
  ];
  var images = [
    "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=720&q=80",
  ];

  document.addEventListener("DOMContentLoaded", function () {
    var names = document.querySelectorAll(
      ".techzone-home-container .product-info .name a",
    );
    names.forEach(function (name, index) {
      name.textContent = products[index % products.length];
    });

    var productImages = document.querySelectorAll(
      ".techzone-home-container .scroll-tabs .product-image img",
    );
    productImages.forEach(function (image, index) {
      image.src = images[index % images.length];
      image.alt = products[index % products.length];
    });
  });
})();
