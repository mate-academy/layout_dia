'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.agency__slider-arrow.swiper-button-next',
    prevEl: '.agency__slider-arrow.swiper-button-prev',
  },
});

/* eslint-enable no-unused-vars */
/* eslint-enable no-undef */

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
