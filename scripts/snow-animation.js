import { checkIsMobile } from "./checkIsMobile.js";
import { randomNum } from "./randomNum.js";

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

const totalNumberOfSnowflakes = checkIsMobile()
  ? numberOfSnowflakesMobile
  : numberOfSnowflakesDefault;
const body = document.body;

const animateSnow = (elm, i) => {
  gsap.to(elm, {
    duration: randomNum(30, 70),
    y: window.innerHeight - 10,
    ease: "linear",
    repeat: -1,
    delay: i,
  });
};

for (let i = 0; i < totalNumberOfSnowflakes; i++) {
  const snowflakes = document.createElement("div");

  snowflakes.innerHTML = snowflakeSvg;

  gsap.set(snowflakes, {
    attr: { class: "small-snowflake" },
    x: randomNum(20, window.innerWidth - 20),
    y: -randomNum(20, window.innerHeight),
    scale: randomNum(0.5, 1),
  });

  body.appendChild(snowflakes);
  animateSnow(snowflakes, i);
}
