'use strict';

const rightArrow = document.querySelector('.slider__arrow-container-right');
const leftArrow = document.querySelector('.slider__arrow-container-left');
const slides = document.querySelectorAll('.slider__photo');

let counter = 1;
let slider = document.querySelector(`.slider__photo-${counter}`);

slides.forEach((slide) => {
  slide.style.opacity = `${0}%`;
});

slider.style.opacity = `${100}%`;

leftArrow.addEventListener('click', function() {
  if (counter !== 1) {
    counter--;

    slides.forEach((slide) => {
      slide.style.opacity = `${0}%`;
    });

    slider = document.querySelector(`.slider__photo-${counter}`);

    slider.style.opacity = `${100}%`;
  }
});

rightArrow.addEventListener('click', function() {
  if (counter < slides.length) {
    counter++;

    slides.forEach((slide) => {
      slide.style.opacity = `${0}%`;
    });

    slider = document.querySelector(`.slider__photo-${counter}`);

    slider.style.opacity = `${100}%`;
  }
});
