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

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});
