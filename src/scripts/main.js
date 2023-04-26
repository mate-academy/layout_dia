'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', onSubmit, false);

function onSubmit(event) {
  event.preventDefault();
  form.reset();
};
