'use strict';

const colorBlue = '#2060f6ff';
const transitionDuration = 300;
const scaleDown = 0.985;

const form = document.querySelector('.form__form');
const formField = document.querySelectorAll('.form__field');
const submitButton = document.querySelector('.button--submit');

function setRequired() {
  formField.forEach(field => {
    field.setAttribute('required', '');
  });
}

function removeRequired() {
  formField.forEach(field => {
    field.removeAttribute('required');
  });
}

submitButton.addEventListener('click', setRequired);

form.addEventListener('submit', (event) => {
  submitButton.animate([
    {
      color: '#fff',
      background: colorBlue,
      transform: 'scale(1)',
    },
    {
      border: 'none',
      color: colorBlue,
      background: '#fff',
      transform: `scale(${scaleDown})`,
    },
    {
      color: '#fff',
      background: colorBlue,
      transform: 'scale(1)',
    }],
  { duration: transitionDuration });
  event.preventDefault();
  form.reset();
  removeRequired();
});
