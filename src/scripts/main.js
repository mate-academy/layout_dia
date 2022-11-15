'use strict';

const element = document.getElementById('message');

element.addEventListener('keyup', e => {
  const scHeight = Math.max(40, e.target.scrollHeight);

  element.style.height = `${scHeight}px`;
});

const sendButton = document.getElementById('send');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const textareaInput = document.getElementById('message');

sendButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === '') {
    nameInput.value = '';
  }

  if (textareaInput.value.trim() === '') {
    textareaInput.value = '';
  }

  if (emailInput.value.trim().length > 0
    && nameInput.value.trim().length > 0
    && textareaInput.value.trim().length > 0) {
    emailInput.value = '';
    nameInput.value = '';
    textareaInput.value = '';
    textareaInput.style.height = '40px';
  }
});
