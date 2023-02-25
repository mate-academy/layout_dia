'use strict';

const form = document.getElementById('orderform');

form.addEventListener(
  'submit', function(evt) {
    evt.preventDefault();
    form.reset();
  }
);
