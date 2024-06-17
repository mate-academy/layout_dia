'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('menu--with-menu');
  } else {
    document.body.classList.remove('menu--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.slideNext();
