'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.header__menu-open');
const navMenu = document.querySelector('.header__menu');
const navLink = document.querySelectorAll('.header__menu-link');
const navClose = document.querySelector('.header__menu-close');
const form = document.querySelector('.form');

menuOpener.addEventListener('click', () => {
  navMenu.classList.add('header__menu--active');
  body.classList.add('page__body--with-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('header__menu--active');
  body.classList.remove('page__body--with-menu');
});

const linkAction = () => {
  navMenu.classList.remove('header__menu--active');
  body.classList.remove('page__body--with-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const swiper = new Swiper('.hero__slider', {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.hero__slider-btn--next',
    prevEl: '.hero__slider-btn--prev',
  },
});
/* eslint-enable no-unused-vars */
/* eslint-enable no-undef */

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();
});
