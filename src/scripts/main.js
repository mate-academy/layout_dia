'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
