'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contactUsForm = document.querySelector('#form__contact-us');

contactUsForm.addEventListener('submit', ev => {
  ev.preventDefault();
  contactUsForm.reset();
});
