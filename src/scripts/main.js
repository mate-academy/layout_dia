'use strict';

const form = document.getElementById('sendMessage');

function submitForm(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submitForm);
