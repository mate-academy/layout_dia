'use strict';

const button = document.getElementById('form-submit');

button.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = window.location.origin;
});
