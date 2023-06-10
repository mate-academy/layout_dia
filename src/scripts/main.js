'use strict';

const frm = document.getElementById('submitForm');

frm.addEventListener('submit', (event) => {
  event.preventDefault();
  // frm.submit(); // Submit the form
  frm.reset(); // Reset all form data
});
