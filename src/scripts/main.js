'use strict';

new Swiper('.swiper', {
  spaceBetween: 0,
  navigation: {
    nextEl: '.image-slider__button-next',
    prevEl: '.image-slider__button-prev'
  },
  grabCursor: true,
  spaceBetween: 0,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

const icon = document.querySelector('.icon');
const barTop = icon.querySelector('.icon__bar--top');
const barBottom = icon.querySelector('.icon__bar--bottom');
const menu = document.querySelector('.menu');

icon.addEventListener('click', () => {
  barTop.classList.toggle('icon__bar--top-rotate');
  barBottom.classList.toggle('icon__bar--bottom-rotate');
  menu.classList.toggle('menu--hidden');
});
