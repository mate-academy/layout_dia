'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('qwer');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
  form.reset();
});
