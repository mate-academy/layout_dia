'use strict';

const form = document.querySelector('.contact__form');
const formTextarea = document.querySelector('.contact__form--message');

formTextarea.addEventListener('input', () => {
  const text = formTextarea.value;
  const lines = text.split(/\r\n|\r|\n/).length;

  if (lines > 1) {
    formTextarea.style.height = 'auto';
    formTextarea.style.paddingBottom = '18px';
    formTextarea.style.height = `${formTextarea.scrollHeight}px`;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  form.reset();
  window.scrollTo({ top: 0 });

  formTextarea.style.height = 'auto';
  formTextarea.style.paddingBottom = '0';
});
