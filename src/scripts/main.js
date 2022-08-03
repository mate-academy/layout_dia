'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#headerMenu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formSubmit = document.getElementById('formSubmit');

formSubmit.addEventListener('click', function(event) {
  event.preventDefault();
});
