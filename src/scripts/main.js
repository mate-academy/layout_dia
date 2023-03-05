'use strict';

const sliderWrapper = document.querySelector('.slider__wrapper');
const prevButton = document.querySelector('.slider__prev');
const nextButton = document.querySelector('.slider__next');
const slideWidth = document.querySelector('.slider__slide').clientWidth;

let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = 2;
  }
  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

nextButton.addEventListener('click', () => {
  slideIndex++;

  if (slideIndex > 2) {
    slideIndex = 0;
  }
  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

setInterval(() => {
  slideIndex++;

  if (slideIndex > 2) {
    slideIndex = 0;
  }
  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}, 5000);

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });
});
