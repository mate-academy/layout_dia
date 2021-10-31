'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('load', () => {
  const form = document.querySelector('.footer__send-message-form');

  form.addEventListener('submit', handleEvent);

  function handleEvent(event) {
    event.preventDefault();
    form.reset();
  }
});
