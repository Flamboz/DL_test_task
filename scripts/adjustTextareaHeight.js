const textarea = document.querySelector(".form__textarea");

const adjustTextareaHeight = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
  window.scrollTo(0, scrollTop);
};

textarea.setAttribute(
  "style",
  "height:" + textarea.scrollHeight + "px;overflow-y:hidden;"
);

textarea.addEventListener("input", adjustTextareaHeight, false);