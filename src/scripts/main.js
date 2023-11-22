'use strict';

document.getElementById('feedbackForm').addEventListener('submit',
  function(event) {
    event.preventDefault();
    event.stopPropagation();

    const inputs = document.getElementsByClassName('footer__form-input');

    for (const input of inputs) {
      input.value = '';
    }
  });
