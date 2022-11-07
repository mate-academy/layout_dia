'use strict';

const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.icon-menu');

header.addEventListener('click', (evt) => {
  if (evt.target.className === 'icon-menu'
      || evt.target.className === 'icon-menu icon-menu--active') {
    menu.classList.toggle('header__menu--active');
    menuIcon.classList.toggle('icon-menu--active');
  }

  if (evt.target.tagName === 'A'
      || evt.target.tagName === 'IMG') {
    menu.classList.remove('header__menu--active');
    menuIcon.classList.remove('icon-menu--active');
  }
});
