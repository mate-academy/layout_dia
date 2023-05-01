'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('page__body--with-menu')
    : document.body.classList.remove('page__body--with-menu');
});
