/* eslint-disable no-console */
"use strict";

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#menu") {
    document.body.classList.add("menu__open");
  } else {
    document.body.classList.remove("menu__open");
  }
});

const btn = document.querySelector(".button-submit");
const Name = document.querySelector(".input__name");
const Email = document.querySelector(".input__email");
const comment = document.querySelector(".input__message");
console.log(btn);
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-slider");
const prevBtn = document.querySelector(".prev-slider");

let currSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

nextBtn.addEventListener("click", () => {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
});

prevBtn.addEventListener("click", () => {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
});

btn.addEventListener("click", (e) => {
  if (
    Name.value.length > 0 &&
    Email.value.indexOf("@") !== -1 &&
    Email.value.length > 0
  ) {
    e.preventDefault();
    Name.value = "";
    Email.value = "";
    comment.value = "";
  }
});
