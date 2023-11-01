'use strict';

document.getElementById('MyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('email').value = '';
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
});
