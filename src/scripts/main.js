'use strict';

const page = document.querySelector('.page');
const toggler = document.querySelector('.header__top__nav__menu-toggler');

const toggler1 = document.querySelector('.footer__bottom__nav__menu-toggler');

const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('header__top__nav__menu-toggler--active');
  menu.classList.toggle('menu--active');
  page.classList.toggle('page--fixed');
});

toggler1.addEventListener('click', () => {
  toggler1.classList.toggle('footer__bottom__nav__menu-toggler--active');
  menu.classList.toggle('menu--active');
  page.classList.toggle('page--fixed');
});

menu.addEventListener('click', () => {
  toggler.classList.toggle('header__top__nav__menu-toggler--active');
  toggler1.classList.toggle('footer__bottom__nav__menu-toggler--active');
  menu.classList.toggle('menu--active');
  page.classList.toggle('page--fixed');
});
