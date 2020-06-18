'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

form.addEventListener('submit', e => {
  inputs.forEach(input => {
    input.value = '';
  });
});
