'use strict';

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('body--nav-menu')
    : document.body.classList.remove('body--nav-menu');
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
