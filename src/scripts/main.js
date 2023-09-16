'use strict';

let count = 1;
const slider = document.querySelector('.header__slider');
const left = document.querySelector('.header__slider-circle--left');
const right = document.querySelector('.header__slider-circle--right');

document.addEventListener('click', e => {
  const click = e.target.closest('a');

  if (click === right) {
    if (count === 4) {
      return;
    };

    slider.classList.remove(`header__slider--${count}`);
    count = count + 1;
    right.href = `#${count}`;
    slider.classList.add(`header__slider--${count}`);
  };

  if (click === left) {
    if (count === 1) {
      return;
    };

    slider.classList.remove(`header__slider--${count}`);
    count = count - 1;
    left.href = `#${count}`;
    slider.classList.add(`header__slider--${count}`);
  };
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
