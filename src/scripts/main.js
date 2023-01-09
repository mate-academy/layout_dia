'use strict';

/* eslint-disable no-unused-vars */
const slider = new window.Swiper('.slider', {
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
});
/* eslint-disable no-unused-vars */

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

const form = document.querySelector('form');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);
