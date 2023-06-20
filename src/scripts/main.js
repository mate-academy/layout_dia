'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const form = document.querySelector('.form__content');

const sendButton = document.querySelector('.form__button');

sendButton.addEventListener('click', e => {
  e.preventDefault();
  form.reset();
});
