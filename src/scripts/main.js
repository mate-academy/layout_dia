'use strict';

// Prevents scrolling when header menu (mobile one) is open:

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#headerMenu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Prevents form from submition:

const formSubmit = document.getElementById('formSubmit');

formSubmit.addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('footer-contact-form').reset();
});
