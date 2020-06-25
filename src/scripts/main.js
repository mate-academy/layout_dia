'use strict';

window.addEventListener('load', onSubmit);

function onSubmit() {
  if (event) {
    event.preventDefault(this);
  }

  document.querySelector('#feedback-user-name').value = '';
  document.querySelector('#feedback-user-mail').value = '';
  document.querySelector('#feedback-user-text').value = '';
}
