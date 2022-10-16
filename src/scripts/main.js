'use strict';

const next = document.querySelectorAll('.slide__circle--next');
const prev = document.querySelectorAll('.slide__circle--prev');
const slides = document.querySelector('.slider__slides');
const countOfSlides = slides.children.length;

let position = 0;

for (let i = 0; i < countOfSlides; i++) {
  next[i].addEventListener('click', moveNext);
  prev[i].addEventListener('click', movePrev);
}

function moveNext() {
  position++;

  if (position === countOfSlides) {
    position = 0;
  }

  slides.style.transform = `translateX(${-position * 100}%)`;
}

function movePrev() {
  position--;

  if (position < 0) {
    position = countOfSlides - 1;
  }

  slides.style.transform = `translateX(${-position * 100}%)`;
}

const form = document.querySelector('.footer__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
