'use strict';

const formfieldElement = document.getElementById('formfield');
const nameInputElement = document.getElementById('formfield-name');
const emailInputElement = document.getElementById('formfield-email');
const messageInputElement = document.getElementById('formfield-massage');

formfieldElement.addEventListener('submit', (event) => {
  event.preventDefault();

  nameInputElement.value = '';
  emailInputElement.value = '';
  messageInputElement.value = '';

  window.alert('Sent successfully!');
});
