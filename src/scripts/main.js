'use strict';

const form = document.querySelector('.contact__form');
const formTextarea = document.querySelector('.contact__form--message');

formTextarea.addEventListener('input', () => {
  formTextarea.style.height = 'auto';
  formTextarea.style.height = `${formTextarea.scrollHeight}px`;
});

form.addEventListener('submit', event => {
  event.preventDefault();

  form.reset();
  window.scrollTo({ top: 0 });

  formTextarea.style.height = 'auto';
});
