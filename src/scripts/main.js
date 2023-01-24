'use strict';

const icon = document.querySelector('.icon');
const menu = document.querySelector('.header__menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#menu') {
    icon.classList.remove('icon--close');
    menu.classList.remove('header__menu--open');
  }
});

icon.addEventListener('click', (e) => {
  icon.classList.toggle('icon--close');
  menu.classList.toggle('header__menu--open');
});
