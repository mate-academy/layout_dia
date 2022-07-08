'use strict';

function stopDefAction(event) {
  event.preventDefault();
}

document.getElementById('my-form').addEventListener(
  'click', stopDefAction, false
);
