'use strict';

const form = document.querySelector('.message__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
