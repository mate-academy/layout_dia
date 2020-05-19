'use strict';

const hamburger = document.querySelector('.promo__hamburger');
const mobileNav = document.querySelector('.mob-navbar');

hamburger.addEventListener('click', e => {
  mobileNav.classList.add('mob-navbar--active');
});

mobileNav.addEventListener('click', e => {
  mobileNav.classList.remove('mob-navbar--active');
});
