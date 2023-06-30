'use strict';

const form = document.getElementById('sendMessage');

function submitForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', submitForm);
