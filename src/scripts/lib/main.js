'use strict';

const slider = document.querySelectorAll('.slider__list .slider__slide');
let currentSlide = 0;

function handleSliderButton(n) {
  slider[currentSlide].className = 'slider__slide';
  currentSlide = (n + slider.length) % slider.length;
  slider[currentSlide].className = 'slider__slide slider__slide--visible';
}

function nextSlide() {
  handleSliderButton(currentSlide + 1);
}

function previousSlide() {
  handleSliderButton(currentSlide - 1);
}

const next = document.querySelector('.slider__button--left');
const previous = document.querySelector('.slider__button--right');

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};

const form = document.querySelector('.footer__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.reload(false);
});
