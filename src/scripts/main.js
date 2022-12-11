'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contactUsForm = document.querySelector('#form__contact-us');

contactUsForm.addEventListener('submit', ev => {
  ev.preventDefault();
  contactUsForm.reset();
});

/* global Swiper */
/* eslint-disable-next-line no-new */
new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
