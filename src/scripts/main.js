'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('air__body--with-menu');
  } else {
    document.body.classList.remove('air__body--with-menu');
  }
});

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  form.reset(); // Reset the form
});
