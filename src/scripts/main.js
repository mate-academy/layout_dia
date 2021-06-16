'use strict';

let num = 0;
const slider = document.querySelector('.header__slider-container');

document.querySelector('.header__slider-but--left').addEventListener('click',
  function() {
    num += 100;

    if (num === 100) {
      num = -200;
    };
    slider.style.left = num + '%';
  }
);

document.querySelector('.header__slider-but--right').addEventListener('click',
  function() {
    num -= 100;

    if (num === -300) {
      num = 0;
    };
    slider.style.left = num + '%';
  }
);
