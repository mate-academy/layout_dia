'use strict';

const submit = document.querySelector('#submit');

submit.addEventListener('click', submitClick, false);

function submitClick(event) {
  event.preventDefault();
}
