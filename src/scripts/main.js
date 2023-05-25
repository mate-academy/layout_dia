'use strict';

function submitForm(event) {
  document.querySelector('#form').reset();
}

document.querySelector('#form').addEventListener('submit', submitForm);
