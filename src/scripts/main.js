'use strict';

const element = document.getElementById('message');

element.addEventListener('keyup', e => {
  const scHeight = e.target.scrollHeight;

  element.style.height = `${scHeight}px`;
});

const sendButton = document.getElementById('send');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const textareaInput = document.getElementById('message');

sendButton.addEventListener('click', (event) => {
  if (nameInput.value.trim() === '') {
    nameInput.value = '';
  }

  if (textareaInput.value.trim() === '') {
    textareaInput.value = '';
  }

  if (emailInput.value.trim().length > 0
    && nameInput.value.trim().length > 0
    && textareaInput.value.trim().length > 0) {
    window.scrollTo(0, 0);
    emailInput.value = '';
    nameInput.value = '';
    textareaInput.value = '';
  }
});
