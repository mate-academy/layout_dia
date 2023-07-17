'use strict';

const contactsForm = document.querySelector('.contacts__form');
const formFields = document.querySelectorAll('.contacts__form__field');

contactsForm.addEventListener('submit', event => {
  event.preventDefault();

  formFields.forEach(field => {
    field.value = '';
  });
});

window.addEventListener('hashchange', () =>{
  if(window.location.hash === '#menu') {
    document.body.classList.add('page__lock-scroll');
  } else {
    document.body.classList.remove('page__lock-scroll');
  }
})