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

// function validateForm() {
//   let userEmail = document.getElementById('email').value;
//   let userName = document.getElementById('name').value;

//   if (userEmail == '') {
//     return false;
//   }
//   if (userName == '') {
//     return false;
//   }

//   return true;
// }

// userEmail.addEventListener('clicks', sendButton);
// userName.addEventListener('clicks', sendButton);
