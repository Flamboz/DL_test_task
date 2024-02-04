const textareas = document.querySelectorAll(".form__textarea");

const adjustTextareaHeight = (textarea) => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
  window.scrollTo(0, scrollTop);
};

textareas.forEach((textarea) => {
  textarea.setAttribute(
    "style",
    "height:" + textarea.scrollHeight + "px;overflow-y:hidden;"
  );
  textarea.addEventListener(
    "input",
    () => adjustTextareaHeight(textarea),
    false
  );
});
