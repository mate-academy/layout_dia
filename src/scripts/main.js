'use strict';

const burgerButton = document.querySelector('.header__burger');
const menuCross = document.querySelector('.mobile-menu__cross');
const mobileMenu = document.querySelector('.mobile-menu');

burgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--open');
});

menuCross.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu--open');
});
