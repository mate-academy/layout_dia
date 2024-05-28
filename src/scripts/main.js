'use strict';

const navLink = document.querySelector('a[href="#navigation"]');
const navCloseBtn = document.querySelector('.header__cover--top--wrap--nav--links.close');
const body = document.documentElement;

navLink.addEventListener('click', () => {
  body.classList.add('no-scroll');
});

navCloseBtn.addEventListener('click', () => {
  body.classList.remove('no-scroll');
});
