document.addEventListener("DOMContentLoaded", function () {
  const fullPageSwiper = new Swiper("#page-slider", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
  });

  const presentSwiper = new Swiper("#presents__slider", {
    clickable: true,
    spaceBetween: 30,
    loop: true,
  });

  const buttons = document.querySelectorAll(".present__single-option");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const swiperId = button.getAttribute("data-swiper-id");
      presentSwiper.slideTo(swiperId);
    });
  });

  presentSwiper.on("slideChange", function (swiper) {
    const activeIndex = swiper.realIndex;
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    if (buttons[activeIndex]) {
      buttons[activeIndex].classList.add("active");
    }
  });
});
