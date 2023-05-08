'use strict';

const menuOpener = document.querySelector('.header__menu-opener');
const menu = document.querySelector('.menu');
const menuCross = document.querySelector('.menu__cross');
const form = document.querySelector('.footer__form');

menuOpener.addEventListener('click', () => {
  menu.classList.add('menu--open');
});

menuCross.addEventListener('click', () => {
  menu.classList.remove('menu--open');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
