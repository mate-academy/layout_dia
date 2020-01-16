'use strict';

const burger = document.querySelector('.header__burger-menu');
const mobileNav = document.querySelector('.nav__list');
const headingHeader = document.querySelector('.header__text-block');

burger.addEventListener('click', () => {
  if (headingHeader.classList.contains('header__text-block--hide')) {
    headingHeader.classList.add('header__text-block--visible');
    headingHeader.classList.remove('header__text-block--hide');
  } else {
    headingHeader.classList.add('header__text-block--hide');
    headingHeader.classList.remove('header__text-block--visible');
  };

  if (mobileNav.classList.contains('header__menu-mobile--opened')) {
    mobileNav.classList.add('header__menu-mobile--closed');
    mobileNav.classList.remove('header__menu-mobile--opened');
  } else {
    mobileNav.classList.add('header__menu-mobile--opened');
    mobileNav.classList.remove('header__menu-mobile--closed');
  };

  if (burger.classList.contains('header__burger-menu--opened')) {
    burger.classList.add('header__burger-menu--closed');
    burger.classList.remove('header__burger-menu--opened');
  } else {
    burger.classList.add('header__burger-menu--opened');
    burger.classList.remove('header__burger-menu--closed');
  };
});
