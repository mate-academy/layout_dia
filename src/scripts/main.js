'use strict';

const contactsForm = document.querySelector('.contacts__form');
const formFields = document.querySelectorAll('.contacts__form__field');

contactsForm.addEventListener('submit', event => {
  event.preventDefault();

  formFields.forEach(field => {
    field.value = '';
  });
});
