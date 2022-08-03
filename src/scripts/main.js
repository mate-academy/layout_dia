'use strict';

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
