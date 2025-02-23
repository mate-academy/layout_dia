'use strict';
// Отримуємо всі кнопки
const arrow1 = document.querySelector(".arrow-1");
const arrow2Left = document.querySelector(".arrow-2-left");
const arrow2Right = document.querySelector(".arrow-2-right");
const arrow3 = document.querySelector(".arrow-3");
// const arrow3Right = document.querySelector(".arrow-3-right");

arrow1.addEventListener("click", () => {
  arrow2Right.classList.remove("hidden");
  arrow3.classList.add("hidden");
});

arrow2Right.addEventListener("click", () => {
  arrow2Right.classList.add("hidden");
  arrow3.classList.remove("hidden");
});


arrow3.addEventListener("click", () => {
  arrow2Left.classList.remove("hidden");
  arrow1.classList.add("hidden");
});

arrow2Left.addEventListener("click", () => {
  arrow2Left.classList.add("hidden");
  arrow1.classList.remove("hidden");
});
