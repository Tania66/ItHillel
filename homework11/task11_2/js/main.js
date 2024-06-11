// Є блок із текстом на сторінці та кнопку.
// При натисканні на кнопку текст змінює колір.
// При повторному натисканні – повертається попередній колір

const textEl = document.querySelector(".text");
const buttonEl = document.querySelector(".button");

const handleClick = () => {
  textEl.classList.toggle("text__active");
  buttonEl.classList.toggle("button__active");
};

buttonEl.addEventListener("click", handleClick);
