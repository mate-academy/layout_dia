'use strict';

function stopDefAction(evt) {
  evt.preventDefault();
  document.form.reset();
}

document.getElementById('form').addEventListener(
  'submit', stopDefAction, false);
