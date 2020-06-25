'use strict';

// const textArea = document.querySelector('.textarea');

window.addEventListener('load', onSubmit);

// function empty(some) {
//   some.value = '';
// };

// empty(textArea);

function onSubmit() {
  if (event) {
    event.preventDefault(this);
  }

  document.querySelector('#feedback-user-name').value = '';
  document.querySelector('#feedback-user-mail').value = '';
  document.querySelector('#feedback-user-text').value = '';
}
