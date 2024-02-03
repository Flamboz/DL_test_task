document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const lines = document.querySelectorAll(".header__burger span");
  const sidebar = document.querySelector(".sidebar");
  const circle = document.querySelector(".bg-circle");

  const linesAnimationTimeline = gsap
    .timeline({ paused: true })
    .to(
      lines[0],
      { y: 0, rotation: 45, duration: 0.2, ease: "power2.inOut" },
      0
    )
    .to(lines[1], { opacity: 0, duration: 0.1, ease: "power2.inOut" }, 0)
    .to(
      lines[2],
      { y: 0, rotation: -45, duration: 0.2, ease: "power2.inOut" },
      0
    );

  const sidebarAnimationTimeline = gsap
    .timeline({ paused: true })
    .to(sidebar, { right: 0, duration: 0.6, ease: "power2.inOut" });

  const getVpdr = () => {
    const vph = Math.pow(document.documentElement.offsetHeight, 2);
    const vpw = Math.pow(document.documentElement.offsetWidth, 2);
    const vpd = Math.sqrt(vph + vpw);
    return vpd / circle.clientWidth;
  };

  const updateNavbarScale = (scale) => {
    gsap.to(circle, 0.1, { scale, ease: "power2.inOut" });
  };

  let isActive = false;
  let isMobile = document.documentElement.offsetWidth <= 768;

  const openNavbar = () => {
    updateNavbarScale(isMobile ? getVpdr() * 2 : getVpdr());
  };

  const closeNavbar = () => {
    updateNavbarScale(1);
  };

  burger.addEventListener("click", () => {
    isActive = !isActive;
    console.log(isMobile);

    if (isMobile) {
      sidebar.style.width = `100vw`;
      sidebar.style.height = `100vh`;
    } else {
      sidebar.style.width = `${((circle.clientWidth * getVpdr()) / 2) * 0.8}px`;
      sidebar.style.height = `${Math.min(
        (circle.clientWidth *
          getVpdr() *
          ((circle.clientWidth * getVpdr()) /
            2 /
            this.documentElement.offsetHeight)) /
          2,
        document.documentElement.offsetHeight
      )}px`;
    }

    if (isActive) {
      linesAnimationTimeline.play();
      sidebarAnimationTimeline.play();
      openNavbar();
    } else {
      linesAnimationTimeline.reverse();
      sidebarAnimationTimeline.reverse();
      closeNavbar();
    }
  });
});
