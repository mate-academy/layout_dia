'use strict';

const footerForm = document.querySelector('.footer__form');
const email = document.querySelector('#email');

footerForm.addEventListener('submit', (ev) => {
  ev.target.reset();
  ev.preventDefault();
});

email.addEventListener('input', function() {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('An e-mail is expected');
  } else {
    email.setCustomValidity('');
  }
});
