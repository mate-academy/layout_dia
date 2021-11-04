'use strict';

const slider = document.querySelector('.slider');
const left = document.querySelector('.slider__button--left');
const right = document.querySelector('.slider__button--right');

let count = 1;

right.addEventListener('click', () => {
  if (count === 3) {
    count = 0;
    slider.classList.remove('slider--2');
    slider.classList.remove('slider--3');
  }
  count++;
  slider.classList.add(`slider--${count}`);
});

left.addEventListener('click', () => {
  if (count === 1) {
    count = 4;
    slider.classList.add('slider--2');
    slider.classList.add('slider--3');
  }

  slider.classList.remove(`slider--${count}`);
  count--;
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
