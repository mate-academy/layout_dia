'use strict';

const submitButton = document.getElementById('submitButton');

function onSubmit() {
  document.getElementById('email').value = '';
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
};

submitButton.addEventListener('onsubmit', onSubmit);
