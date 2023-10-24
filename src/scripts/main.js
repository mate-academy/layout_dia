'use strict';

const slider = document.querySelector('.black__slider');
const btnRightSlider = document.querySelector(
  '.black__slider-navigation--arrows-right');
const btnLeftSlider = document.querySelector(
  '.black__slider-navigation--arrows-left');

btnLeftSlider.addEventListener('click', showPreviousSlide);
btnRightSlider.addEventListener('click', showNextSlide);

let countSlid = 1;

function showNextSlide() {
  countSlid++;

  if (countSlid === 5) {
    countSlid = 1;
  }
  slider.classList = `black__slider black__slide-${countSlid}`;
}

function showPreviousSlide() {
  countSlid--;

  if (countSlid === 0) {
    countSlid = 4;
  }
  slider.classList = `black__slider black__slide-${countSlid}`;
}
