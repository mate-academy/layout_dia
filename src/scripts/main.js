'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

const reset = () => {
  inputs.forEach(input => {
    input.value = '';
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  reset();
});

const body = document.querySelector('.page__body');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    body.classList.add('page__body--with-menu');
  } else {
    body.classList.remove('page__body--with-menu');
  }
});
