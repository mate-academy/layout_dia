'use strict';

const form = document.querySelector('.message__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
