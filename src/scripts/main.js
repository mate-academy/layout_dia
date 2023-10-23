'use strict';

const slider = document.querySelector('.black__slider');
const btnRight = document.querySelector(
  '.black__slider-navigation--arrows-right');
const btnLeft = document.querySelector(
  '.black__slider-navigation--arrows-left');

btnLeft.addEventListener('click', showPreviousSlide);
btnRight.addEventListener('click', showNextSlide);

let count = 1;

function showNextSlide() {
  count++;

  if (count === 5) {
    count = 1;
  }
  slider.classList = `black__slider black__slide-${count}`;
}

function showPreviousSlide() {
  count--;

  if (count === 0) {
    count = 4;
  }
  slider.classList = `black__slider black__slide-${count}`;
}
