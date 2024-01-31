document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container", {
    clickable: true,
    spaceBetween: 30,
    loop: true,
  });

  mySwiper.on("slideChange", function (swiper) {
    const activeIndex = swiper.activeIndex;
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    if (buttons[activeIndex]) {
      buttons[activeIndex].classList.add("active");
    }
  });

  const buttons = document.querySelectorAll(".present__single-option");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const swiperId = button.getAttribute("data-swiper-id");
      mySwiper.slideTo(swiperId);
    });
  });
});
