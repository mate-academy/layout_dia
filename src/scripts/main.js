'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('header--with-menu');
  } else {
    document.body.classList.remove('header--with-menu');
  }
});

const myForm = document.querySelector('.my-form');

const sendButton = document.getElementById('clicks');

sendButton.addEventListener('click', function(event) {
  event.preventDefault();
  myForm.reset();
});

myForm.addEventListener('clicks', sendButton);
