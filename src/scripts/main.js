'use strict';

document.getElementById('formId').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('inputId-name').value = '';
  document.getElementById('inputId-email').value = '';
  document.getElementById('inputId-message').value = '';
});
