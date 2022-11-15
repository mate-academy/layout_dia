'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', formSubmit);

function formSubmit(evt) {
  evt.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
}
