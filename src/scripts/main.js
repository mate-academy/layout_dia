'use strict';

const form = document.querySelector('.form__form');
const formField = document.querySelectorAll('.form__field');
const submitButton = document.querySelector('.button--submit');

function setRequired() {
  formField.forEach(field => {
    field.setAttribute('required', '');
  });
}

submitButton.addEventListener('click', setRequired);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
