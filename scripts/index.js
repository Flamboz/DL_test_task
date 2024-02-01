import "./presents-slider.js";
import "./snow-animation.js"

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu-list");

  burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    menu.classList.toggle("visible");
  });

  const fullPageScroll = new Swiper("#page-slider", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    freeMode: window.innerWidth <= 768 ? true : false,
  });
});
