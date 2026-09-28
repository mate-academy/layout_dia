'use strict';

const form = document.querySelector('.footer__form-box__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
