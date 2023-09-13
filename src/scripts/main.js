/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
'use strict';

let header__burger = document.querySelector('.header__burger,.header__link');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function() {
  header__burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  back.classList.toggle('lock');
};

header__list.onclick = function() {
  header__burger.classList.remove('active');
  header_menu.classList.remove('active');
  header__list.classList.remove('active');
  back.classList.toggle('lock');
};

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 800,
  touchRatio: 0,
  effect: 'fade',

  fadeEffect: {
    crossfade: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
