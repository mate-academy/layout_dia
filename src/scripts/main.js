'use strict';

const menu = document.querySelector('.section--menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('section--menu-shown');
  } else {
    menu.classList.remove('section--menu-shown');
  }
});
