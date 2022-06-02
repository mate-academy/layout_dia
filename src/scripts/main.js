'use strict';

const form = document.querySelector('.footer__form');
const inputs = document.querySelectorAll('.form-field__input');
const textarea = document.querySelector('.form-field__textarea');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });

  textarea.value = '';
});
