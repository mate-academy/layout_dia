'use strict';

const menu = document.querySelector('.section--menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('section--menu-shown');
  }
});

window.addEventListener('wheel', () => {
  menu.classList.remove('section--menu-shown');
  window.location.hash = '#';
});
