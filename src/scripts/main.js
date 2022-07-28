'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.message-form');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

function handleForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleForm);

form.addEventListener('submit', (event) => {
  input1.value = '';
  input2.value = '';
  input3.value = '';
});
