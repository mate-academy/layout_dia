'use strict';

const slider = document.querySelector('#slider');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    slider.classList.add('slider--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
    slider.classList.remove('slider--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
});
