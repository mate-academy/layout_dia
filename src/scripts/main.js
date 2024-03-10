'use strict';

const switcher = document.querySelector('.nav__theme-switcher');
const header = document.querySelector('.header');
const slider = document.querySelector('.slider');

switcher.addEventListener('click', () => {
  if (header.classList.contains('header--theme-light')) {
    header.classList.remove('header--theme-light');
    slider.classList.remove('slider--theme-light');
    switcher.innerHTML = 'to light theme';
  } else {
    header.classList.add('header--theme-light');
    slider.classList.add('slider--theme-light');
    switcher.innerHTML = 'to dark theme';
  }
})
