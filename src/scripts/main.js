'use strict';

const side = document.querySelector('.header__side');
const left = document.querySelector('.header__side-toggle--left');
const right = document.querySelector('.header__side-toggle--right');
const menu = document.querySelector('.header__menu-icon');

let count = 1;

side.addEventListener('click', e => {
  const button = e.target.closest('a');

  if (button === right) {
    count++;
    side.classList.value = `header__side  header__side--${count}`;
    right.href = `#${count}`;

    if (count === 4) {
      count = 0;
    }
  }

  if (button === left) {
    if (count === 0) {
      count = 4;
    }

    side.classList.value = `header__side  header__side--${count}`;
    left.href = `#${count}`;

    count--;
  }
});

document.addEventListener('click', e => {
  if (e.target === menu) {
    document.body.classList.add('page__body--hidden');
  } else {
    document.body.classList.remove('page__body--hidden');
  }
});
