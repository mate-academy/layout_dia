'use strict';

let countClick = 1;

const sliderImg = document.getElementById('slider');

document.querySelector('.header__bottom-buttons--right')
  .addEventListener('click', () => sliderChanged('right'));

document.querySelector('.header__bottom-buttons--left')
  .addEventListener('click', () => sliderChanged('left'));

function sliderChanged(arrow) {
  if (arrow === 'right') {
    sliderImg.classList.remove(`slider-${countClick}`);
    countClick++;
  } else {
    sliderImg.classList.remove(`slider-${countClick}`);
    countClick--;
  }

  if (countClick < 1) {
    countClick = 4;
  }

  if (countClick > 4) {
    countClick = 1;
  }

  sliderImg.classList.add(`slider-${countClick}`);
}
