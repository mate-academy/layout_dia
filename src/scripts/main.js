'use strict';

const slider = document.querySelector('.slider');
const sliderLeft = document.querySelector('.btn-left');
const sliderRight = document.querySelector('.btn-right');
let slideNumber = 1;

function changeSlide(direction) {
  slider.classList.remove(`slider--bckgrnd-${slideNumber}`);

  if (direction === 'l') {
    slideNumber === 1
      ? slideNumber = 4
      : slideNumber--;
  }

  if (direction === 'r') {
    slideNumber === 4
      ? slideNumber = 1
      : slideNumber++;
  }

  slider.classList.add(`slider--bckgrnd-${slideNumber}`);
}

sliderLeft.addEventListener('click', () => {
  changeSlide('l');
}
);

sliderRight.addEventListener('click', () => {
  changeSlide('r');
}
);
