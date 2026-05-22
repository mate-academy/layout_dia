'use strict';

const form = document.querySelector('.footer__message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
