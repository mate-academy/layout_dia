'use strict';

const form = document.querySelector('.footer__form');
const inputs = document.querySelectorAll('.footer__input');
const textarea = document.querySelector('.footer__message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((elem) => {
    elem.value = '';
  });

  textarea.value = '';
});
