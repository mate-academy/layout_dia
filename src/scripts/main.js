'use strict';

const form = document.querySelector('.send-a-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
