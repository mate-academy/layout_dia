'use strict';

const menuOpener = document.querySelector('.header__menu-opener');
const menu = document.querySelector('.menu');
const menuCross = document.querySelector('.menu__cross');
const form = document.querySelector('.footer__form');
const menuLinks = document.querySelectorAll('.nav-link--menu');

const closeMenu = () => menu.classList.remove('menu--open');

menuOpener.addEventListener('click', () => {
  menu.classList.add('menu--open');
});

menuCross.addEventListener('click', closeMenu);

menuLinks.forEach(item => item.addEventListener('click', closeMenu));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
