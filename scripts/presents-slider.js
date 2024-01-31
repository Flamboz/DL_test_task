document.addEventListener("DOMContentLoaded", function () {
  const presentSwiper = new Swiper("#presents__slider", {
    clickable: true,
    spaceBetween: 30,
    loop: true,
  });

  const presentsOptions = document.querySelector(".presents__options");

  presentsOptions.addEventListener("click", function (event) {
    const clickedButton = event.target.closest(".present__single-option");

    if (clickedButton) {
      const buttons = document.querySelectorAll(".present__single-option");

      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      clickedButton.classList.add("active");

      const swiperId = clickedButton.getAttribute("data-swiper-id");
      presentSwiper.slideTo(swiperId);
    }
  });

  presentSwiper.on("slideChange", function (swiper) {
    const activeIndex = swiper.realIndex;
    const buttons = document.querySelectorAll(".present__single-option");

    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    if (buttons[activeIndex]) {
      buttons[activeIndex].classList.add("active");
    }
  });
});
