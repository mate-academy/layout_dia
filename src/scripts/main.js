'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('contact-us');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
});
