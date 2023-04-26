'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slider = document.querySelector('.header__slider');
let sliderPostId = 1;

prevButton.addEventListener('click', () => {
  sliderPostId--;
  slider.style.color = '#fff';

  if (sliderPostId < 1) {
    slider.classList.remove(`slider-img--1`);
    sliderPostId = 3;
  }

  if (sliderPostId > 1) {
    slider.style.color = '#2060F6';
  }
  slider.classList.remove(`slider-img--${sliderPostId + 1}`);
  slider.classList.add(`slider-img--${sliderPostId}`);
});

nextButton.addEventListener('click', () => {
  sliderPostId++;
  slider.style.color = '#fff';

  if (sliderPostId > 3) {
    slider.classList.remove(`slider-img--3`);
    sliderPostId = 1;
  }

  if (sliderPostId > 1) {
    slider.style.color = '#2060F6';
  }
  slider.classList.remove(`slider-img--${sliderPostId - 1}`);
  slider.classList.add(`slider-img--${sliderPostId}`);
});
