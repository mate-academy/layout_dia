'use strict';

const menuOpener = document.querySelector('.header__menu-opener');
const menu = document.querySelector('.menu');
const menuCross = document.querySelector('.menu__cross');
const menuLogo = document.querySelector('.menu__logo');
const menuLinks = document.querySelectorAll('.nav-link--menu');
const form = document.querySelector('.footer__form');

const closeMenu = () => menu.classList.remove('menu--open');

menuOpener.addEventListener('click', () => {
  menu.classList.add('menu--open');
});

menuCross.addEventListener('click', closeMenu);
menuLogo.addEventListener('click', closeMenu);

menuLinks.forEach(item => item.addEventListener('click', closeMenu));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
