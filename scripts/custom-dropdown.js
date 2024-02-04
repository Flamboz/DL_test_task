document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownList = dropdown.querySelector(".dropdown__list");

  const toggleDropdown = () => {
    const dropdownBtn = dropdown.querySelector(".dropdown__button");
    dropdownList.classList.toggle("dropdown__list--visible");
    dropdownBtn.classList.toggle("dropdown__button--active");
  };

  const handleListItemClick = (e) => {
    const dropdownBtn = dropdown.querySelector(".dropdown__button");
    const dropdownItems = dropdown.querySelectorAll(".dropdown__list-item");

    dropdownItems.forEach(function (el) {
      el.classList.remove("dropdown__list-item--active");
    });

    e.target.classList.add("dropdown__list-item--active");
    dropdownBtn.innerText = e.target.innerText;
  };

  dropdown.addEventListener("click", function (e) {
    if (e.target === dropdown.querySelector(".dropdown__button")) {
      toggleDropdown();
    } else if (e.target.classList.contains("dropdown__list-item")) {
      handleListItemClick(e);
      toggleDropdown();
    } else {
      toggleDropdown();
    }
  });

  document.addEventListener("click", () => {
    dropdownList.classList.remove("dropdown__list--visible");
  });

  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
