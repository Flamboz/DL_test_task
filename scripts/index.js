import "./presents-slider.js";

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu-list");

  burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    menu.classList.toggle("visible");
  });
});

new Swiper("#page-slider", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
});
