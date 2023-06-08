'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.elements.email.value = '';
  form.elements.name.value = '';
  form.elements.text.value = '';
});

const body = document.querySelector('.page__body');

if (window.location.hash === '#menu') {
  body.style.overflow = 'hidden';
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'visible';
  }
});
