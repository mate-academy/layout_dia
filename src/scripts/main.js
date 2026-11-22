'use strict';
const form = document.querySelector('.contact-form');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
});
