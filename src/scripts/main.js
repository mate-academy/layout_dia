'use strict';

window.onload = function() {
  document.getElementById('form').addEventListener(
    'submit', stopDefAction, false);
};

function stopDefAction(evt) {
  evt.preventDefault();
  document.form.reset();
}
