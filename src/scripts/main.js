'use strict';

// eslint-disable-next-line no-unused-vars
function onSubmit() {
  event.preventDefault();

  document.querySelector('input[name=email]').value = '';
  document.querySelector('input[name=name]').value = '';
  document.querySelector('input[name=message]').value = '';
}
