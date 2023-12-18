'use strict';

const buttonLeft = document.querySelector('.slider__button--left');
const buttonRight = document.querySelector('.slider__button--right');
const slides = document.querySelectorAll('.slide');

let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

buttonLeft.addEventListener('click', () => {
  if (counter !== 0) {
    counter--;
    moveImage();
  }
});

buttonRight.addEventListener('click', () => {
  if (counter < slides.length - 1) {
    counter++;
    moveImage();
  }
});

const moveImage = () => {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
