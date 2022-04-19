'use strict';

function stopDefault(e) {
  e.preventDefault();
}

const form = document.querySelector('.form');

form.addEventListener('submit', function() {
  stopDefault();
});
