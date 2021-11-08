'use strict';

const slider = document.querySelector('.header__slider');

const leftButton = document.querySelector('.slider__button-left');
const rightButton = document.querySelector('.slider__button-right');

let count = 1;

leftButton.addEventListener('click', () => {
  slider.classList.remove(`header__slider--${count}`);

  if (count === 1) {
    count = 4;
  }
  count--;
  slider.classList.add(`header__slider--${count}`);
});

rightButton.addEventListener('click', () => {
  slider.classList.remove(`header__slider--${count}`);

  if (count === 3) {
    count = 0;
  }
  count++;
  slider.classList.add(`header__slider--${count}`);
});
