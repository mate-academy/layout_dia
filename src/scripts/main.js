'use strict';

const Form = document.getElementById('main-form');

Form.addEventListener('submit', (e) => {
  e.target.reset();
  e.preventDefault();
});
