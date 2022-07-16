'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-mobile') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form__form');
const inputs = document.querySelectorAll('.form__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(elem => {
    elem.value = '';
  });
});
