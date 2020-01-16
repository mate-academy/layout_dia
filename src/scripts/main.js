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

let width;

if (document.documentElement.clientWidth > 1000) {
  width = 43;
} else {
  width = 95;
};

window.addEventListener('resize', function() {
  if (window.matchMedia('(max-width: 1000px)').matches) {
    width = 95;
    mobileNav.classList.remove('header__menu-mobile--opened');
    mobileNav.classList.remove('header__menu-mobile--closed');
    headingHeader.classList.remove('header__text-block--hide');
    headingHeader.classList.remove('header__text-block--visible');
    burger.classList.remove('header__burger-menu--opened');
    burger.classList.remove('header__burger-menu--closed');
  } else {
    width = 43;
  }
});

const carousel = document.querySelector('.slider');
const list = carousel.querySelector('.slider__images');
const listElems = carousel.querySelectorAll('.slider__images-item');

let position = 0;

carousel.querySelector('.slider__button-left').onclick = function() {
  position = Math.min(position + width, 0);
  list.style.marginLeft = position + 'vw';
};

carousel.querySelector('.slider__button-right').onclick = function() {
  position = Math.max(position - width, -width * (listElems.length - 1));
  list.style.marginLeft = position + 'vw';
};
