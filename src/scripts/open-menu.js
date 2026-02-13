'use strict';

const page = document.querySelector('.page');
const header = page.querySelector('.header');
const h1 = header.querySelector('h1');
const menu = page.querySelector('.header__menu');
const menuNavItem = menu.querySelectorAll('.nav__item');
const menuOpenBtn = page.querySelector('.top-bar__icon-burger');
const menuCloseBtn = page.querySelector('.menu__icon-close');

menuOpenBtn.addEventListener('click', () => {
  menu.classList.toggle('header__menu--opened');
});

menuCloseBtn.addEventListener('click', () => {
  menu.classList.toggle('header__menu--opened');
});

menuNavItem.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('header__menu--opened');
  });
});

