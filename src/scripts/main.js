'use strict';

// disable reloading when submit form

function stopDefAction(event) {
  document.getElementById('form').reset();
  event.preventDefault();
}

document.getElementById('form').addEventListener(
  'submit', stopDefAction, false
);
