'use strict';

const form = document.querySelector('.footer__form-box__form');
const slider = document.querySelector('.slider');

const leftButton = document.querySelector('a[aria-label="previous"]');
const rightButton = document.querySelector('a[aria-label="next"]');

const sliderImages = [
  'url(/src/images/what-we-do/what-we-do-1.jpg)',
  'url(/src/images/what-we-do/what-we-do-2.jpg)',
  'url(/src/images/what-we-do/what-we-do-3.jpg)',
];

let currentImage = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

rightButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentImage <= 2) {
    currentImage++;
  }

  if (currentImage > 2) {
    currentImage = 0;
  }

  slider.style.backgroundImage = sliderImages[currentImage];
});

leftButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentImage >= 0) {
    currentImage--;
  }

  if (currentImage < 0) {
    currentImage = 2;
  }

  slider.style.backgroundImage = sliderImages[currentImage];
});
