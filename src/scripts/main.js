'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
}

const form = document.getElementById('contact-us-form');

form.addEventListener('submit', onFormSubmit);
