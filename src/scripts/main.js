'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu-open') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
