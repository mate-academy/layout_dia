'use strict';

const form = document.getElementById('contacts-data');

function handleForm(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', handleForm);
