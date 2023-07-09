'use strict';

// Get the checkbox and label elements
const themeSwitcher = document.getElementById('themeSwitcher');

// Add event listener for the theme switcher
themeSwitcher.addEventListener('change', () => {
  // Toggle the dark-theme class on the body element
  document.body.classList.toggle('blue-theme');
});

// Check the initial state of the theme switcher
if (window.matchMedia
  && window.matchMedia('(prefers-color-scheme: light)').matches) {
  themeSwitcher.checked = true;
}
