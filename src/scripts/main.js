'use strict';

function stopDefAction(event) {
  document.getElementById('contactForm').reset();
  event.preventDefault();
}

document.getElementById('contactForm').addEventListener(
  'submit', stopDefAction, false
);
