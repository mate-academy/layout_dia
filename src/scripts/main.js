'use strict';

let countClick = 1;

const slider = document.getElementById('slider');

document.querySelector('.slider__arrow--right')
  .addEventListener('click', () => sliderChanged('right'));

document.querySelector('.slider__arrow--left')
  .addEventListener('click', () => sliderChanged('left'));

function sliderChanged(arrow) {
  slider.classList.remove(`slider-${countClick}`);

  if (arrow === 'right') {
    countClick++;
  } else {
    countClick--;
  }

  if (countClick < 1) {
    countClick = 4;
  }

  if (countClick > 4) {
    countClick = 1;
  }

  slider.classList.add(`slider-${countClick}`);
}
