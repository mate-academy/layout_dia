'use strict';

const contactUsForm = document.querySelector('.form-field--area');

contactUsForm.addEventListener('submit', ev => {
  ev.preventDefault();
  contactUsForm.reset();
});
