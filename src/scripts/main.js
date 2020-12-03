'use strict';

const nav = document.querySelector('.header__nav');
const toggler = document.querySelector('.toggler');

toggler.onclick = function toggleSidebar() {
  nav.classList.toggle('header__nav--has-popup');
  toggler.classList.toggle('toggler--open');
};
