const total = 30;
const section = document.querySelector(".hero");
const w = window.innerWidth;
const h = window.innerHeight;

for (let i = 0; i < total; i++) {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");

  div1.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
      <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#FCF9BF"/>
    </svg>
  `;

  div2.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <circle cx="5" cy="5" r="5" fill="white"/>
    </svg>
  `;

  gsap.set(div1, {
    attr: { class: "small-snowflake" },
    x: randomNum(0, w),
    y: -randomNum(0, h),
    scale: randomNum(0.5, 1),
  });

  gsap.set(div2, {
    attr: { class: "small-snowflake" },
    x: randomNum(0, w),
    y: -randomNum(0, h),
    scale: randomNum(0.5, 1),
  });

  section.appendChild(div1);
  section.appendChild(div2);

  animate(div1);
  animate(div2);
}

function animate(elm) {
  gsap.to(elm, {
    duration: randomNum(30, 70),
    y: h,
    ease: "linear",
    repeat: -1,
    // delay: Math.random() * 10,
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
