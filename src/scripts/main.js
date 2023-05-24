'use strict';

const form = document.querySelector('.send-message__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
