'use strict';

const form = document.getElementById('my_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});
