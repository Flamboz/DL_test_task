import { randomNum } from "./randomNum.js";
import { checkIsMobile } from "./checkIsMobile.js";

const starSvg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
  >
    <path
      d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
      fill="#FCF9BF"
    />
  </svg>
`;
const isMobile = checkIsMobile();
const numberOfStars = 15;
const hero = document.querySelector(".hero");
const starsPaddingTop = isMobile ? 0 : 30;
const starsPaddingBottom = isMobile ? 0 : 110;
const starsPaddingLeft = isMobile ? 0 : 80;
const starsPaddingRight = isMobile ? 0 : 30;

const setStarProperties = (star, xRange, yRange) => {
  gsap.set(star, {
    attr: { class: "hero__star" },
    x: randomNum(xRange[0], xRange[1]),
    y: randomNum(yRange[0], yRange[1]),
    scale: randomNum(0.5, 1),
  });
};

const animateStar = (elm, i) => {
  gsap.to(elm, {
    duration: randomNum(1, 1.2),
    opacity: 0,
    ease: "ease",
    repeat: -1,
    yoyo: true,
    delay: i * 0.15,
    scale: randomNum(0.75, 1.2),
    onRepeat: function () {
      gsap.set(elm, {
        duration: randomNum(1, 1.2),
        delay: i * 0.15,
      });
    },
  });
};

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement("div");
  star.innerHTML = starSvg;

  if (i < numberOfStars - numberOfStars / 5) {
    setStarProperties(
      star,
      [starsPaddingLeft, window.innerWidth * 0.65 - starsPaddingRight],
      [starsPaddingTop, window.innerHeight - starsPaddingBottom]
    );
  } else {
    setStarProperties(
      star,
      [window.innerWidth * 0.65, window.innerWidth],
      [0, window.innerHeight * 0.35]
    );
  }

  hero.prepend(star);
  animateStar(star, i);
}
