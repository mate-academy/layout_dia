'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});
