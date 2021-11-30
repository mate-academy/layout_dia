'use strict';

const leftButton = document.querySelector('.slider__button--left');
const rightButton = document.querySelector('.slider__button--right');

const slider = document.querySelector('.slider');

let count = 1;

rightButton.addEventListener('click', () => {
  if (count === 3) {
    count = 0;
    slider.classList.remove('slider--2');
    slider.classList.remove('slider--3');
  }
  count++;
  slider.classList.add(`slider--${count}`);
});

leftButton.addEventListener('click', () => {
  if (count === 1) {
    count = 4;
    slider.classList.add('slider--2');
    slider.classList.add('slider--3');
  }

  slider.classList.remove(`slider--${count}`);
  count--;
});
