'use strict';

const sandwich = document.querySelector('.navigation__sandwich');
const closeMenu = document.querySelector('.navigation__close');
const mobileMenu = document.querySelector('.navigation__menu-wrapper');

sandwich.addEventListener('click', function() {
  mobileMenu.classList.remove('hide');
  mobileMenu.classList.add('show');
});

closeMenu.addEventListener('click', function() {
  mobileMenu.classList.remove('show');
  mobileMenu.classList.add('hide');
});
