'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__input');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });
});
