'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-opener');
  } else {
    document.body.classList.remove('page__body--menu-opener');
  }
});

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
