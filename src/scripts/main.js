'use strict';

const form = document.querySelector('form');
  form.addEventListener('submit', event => {
    document.location.reload();
    event.preventDefault();
});
