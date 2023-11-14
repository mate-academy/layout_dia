'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formDate = document.querySelector('form');

formDate.addEventListener('submit', function(event) {
  event.preventDefault();
  formDate.reset();
});
