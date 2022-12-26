'use strict';

const form = document.querySelector('.footer__form');

form.addEventListener('submit', (e) => {
  e.target.reset();
});
