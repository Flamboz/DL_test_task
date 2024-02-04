import { checkIsMobile } from "./checkIsMobile.js";

const numberOfSnowflakesMobile = 15;
const numberOfSnowflakesDefault = 30;

const snowflakeSvg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
  >
    <circle cx="5" cy="5" r="5" fill="white" />
  </svg>
`;

const total = checkIsMobile()
  ? numberOfSnowflakesMobile
  : numberOfSnowflakesDefault;
const body = document.body;

for (let i = 0; i < total; i++) {
  const snowflakes = document.createElement("div");

  snowflakes.innerHTML = snowflakeSvg;

  gsap.set(snowflakes, {
    attr: { class: "small-snowflake" },
    x: randomNum(0, window.innerWidth),
    y: -randomNum(0, window.innerHeight),
    scale: randomNum(0.5, 1),
  });

  body.appendChild(snowflakes);
  animate(snowflakes);
}

function animate(elm) {
  gsap.to(elm, {
    duration: randomNum(30, 70),
    y: window.innerHeight,
    ease: "linear",
    repeat: -1,
  });

  gsap.to(elm, {
    duration: randomNum(10, 15),
    x: `+=${randomNum(50, 100)}`,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}
