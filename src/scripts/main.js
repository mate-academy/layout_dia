'use strict';

const slides = document.getElementsByClassName('header__slider-images');

let currentSlide = 0;

document.getElementById('header__slider-button--next')
  .addEventListener('click', () => {
    changeSlide(currentSlide + 1);
  });

document.getElementById('header__slider-button--prev')
  .addEventListener('click', () => {
    changeSlide(currentSlide - 1);
  });

function changeSlide(moveTo) {
  let theMove = moveTo;

  if (theMove >= slides.length) {
    theMove = 0;
  }

  if (theMove < 0) {
    theMove = slides.length - 1;
  }

  slides[currentSlide].classList.toggle('header__slider-images--active');
  slides[theMove].classList.toggle('header__slider-images--active');

  currentSlide = theMove;
}
