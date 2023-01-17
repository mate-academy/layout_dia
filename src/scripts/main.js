'use strict';
document.querySelector('.contact-us__forms').addEventListener('submit',
  function(event) {
    event.preventDefault();
    document.querySelector('.contact-us__forms').reset();
  })