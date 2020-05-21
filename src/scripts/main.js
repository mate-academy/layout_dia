'use strict';

document.querySelector('.menu-icon').onclick = function() {
  document.querySelector('.menu-icon-line')
    .classList.toggle('menu-icon-active');

  document.querySelector('.mob__nav')
    .classList.toggle('mob__slide');
};
