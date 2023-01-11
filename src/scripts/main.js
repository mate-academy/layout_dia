'use strict';

const slider = new window.Swiper('.slider', {
  init: false,
  speed: 1000,
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
});

slider.init();

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
