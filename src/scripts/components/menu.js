'use strict';

const body = document.querySelector('.js-page');
const menu = document.querySelector('.js-navigation');
const navList = document.querySelector('.js-navigation__wrapper');
const links = document.querySelectorAll('.js-navigation__nav-link');
const closeBtn = document.querySelector('.js-navigation__close');

menu.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  navList.classList.add('active');
});

closeBtn.addEventListener('click', (event) => {
  document.body.style.overflow = 'auto';
  navList.classList.remove('active');
  event.stopPropagation();
});

links.forEach((link) =>
  link.addEventListener('click', (event) => {
    document.body.style.overflow = 'auto';
    navList.classList.remove('active');
    event.stopPropagation();
  }),
);
