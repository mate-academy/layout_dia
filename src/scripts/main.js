'use strict';

const textArea = document.querySelector('.textarea');

function empty(some) {
  some.value = '';
};

empty(textArea);

function onSubmit() {
  event.preventDefault(this);

  document.querySelector('#order-user-name').value = '';
  document.querySelector('#order-user-phone').value = '';
  document.querySelector('#order-user-mail').value = '';
  document.querySelector('#feedback-user-name').value = '';
  document.querySelector('#feedback-user-mail').value = '';
  document.querySelector('#feedback-user-text').value = '';
}

window.onload(onSubmit());
