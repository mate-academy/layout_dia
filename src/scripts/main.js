'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const slides = ['slider__line--1', 'slider__line--2', 'slider__line--3'];
let slideIndex = 0;
const sPicture = document.getElementById('slide');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

next.onclick = () => {
  sPicture.classList.remove(slides[slideIndex]);

  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex += 1;
  }

  sPicture.classList.add(slides[slideIndex]);
};

prev.onclick = () => {
  sPicture.classList.remove(slides[slideIndex]);

  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex -= 1;
  }

  sPicture.classList.add(slides[slideIndex]);
};
