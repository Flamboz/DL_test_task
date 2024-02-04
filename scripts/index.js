import "./presents-slider.js";
import "./snow-animation.js";
import "./header.js";
import "./custom-dropdown.js";
import "./adjustTextareaHeight.js";
import { checkIsMobile } from "./checkIsMobile.js";
import { handleUpdateHeaderBgOnScroll } from "./header.js";

document.addEventListener("DOMContentLoaded", function () {
  const arrowToSecondSlide = document.querySelector(".hero__arrow");
  let pageSlider;

  arrowToSecondSlide.addEventListener("click", () => {
    if (pageSlider) {
      pageSlider.slideTo(1);
    }
  });

  if (!checkIsMobile()) {
    pageSlider = new Swiper("#page-slider", {
      direction: "vertical",
      slidesPerView: 1,
      mousewheel: true,
      freeMode: checkIsMobile(),
      on: {
        slideChange: (props) => {
          handleUpdateHeaderBgOnScroll(props.activeIndex > 0);
        },
      },
    });
  } else {
    document.body.classList.add("disable-slider");
  }

  gsap.set(".hero__cloud", { opacity: 0 });
  gsap.to(".hero__cloud", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 3,
  });

  gsap.set(arrowToSecondSlide, { transformOrigin: "50% 50%" });
  gsap.to(arrowToSecondSlide, {
    duration: 0.6,
    y: 8,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
});
