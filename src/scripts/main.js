'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const body = document.body;

  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  });
});

const slides = Array.from(document.querySelectorAll('.slide'));
const prevButton = document.querySelector('.slider__controls--left');
const nextButton = document.querySelector('.slider__controls--right');
let index = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
  });
}

prevButton.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlides();
  }
});

nextButton.addEventListener('click', () => {
  if (index < slides.length - 1) {
    index++;
    updateSlides();
  }
});

updateSlides();
