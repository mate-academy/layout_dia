'use strict';

function submitForm(event) {
  event.preventDefault();
  document.querySelector('#form').reset();
  // window.scrollTo('#header');
}

document.querySelector('#form').addEventListener('submit', submitForm);
