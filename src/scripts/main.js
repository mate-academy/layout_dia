'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.footer__form');

  form.addEventListener('submit', handleEvent);

  function handleEvent(event) {
    event.preventDefault();
    form.reset();
  }
});
