import "./presents-slider.js";
import "./snow-animation.js";

document.addEventListener("DOMContentLoaded", function () {
  new Swiper("#page-slider", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    freeMode: window.innerWidth <= 768 ? true : false,
  });
});
