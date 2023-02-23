'use strict';

// const faviconEl = document.querySelector('link[rel="icon"]');

// // watch for changes 🕵️
// const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// mediaQuery.addEventListener('change', themeChange);

// function themeChange(event) {
//   if (event.matches) {
//     faviconEl.setAttribute('href', 'favicon-dark.png');
//   } else {
//     faviconEl.setAttribute('href', 'favicon-light.png');
//   };
// }

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__input');
const textarea = document.querySelector('.form-field--textarea');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });

  textarea.value = '';
});

// // Get a reference to the button element
// const button = document.querySelector('.contact-us__button');

// // Add an event listener to the button element
// button.addEventListener('click', function(event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Your custom code here...
// });

// const form = document.querySelector('.contact-us__form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   form.reset();
// });
