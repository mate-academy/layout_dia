'use strict';

document.getElementById('toggle').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('mob-link-1').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

document.getElementById('mob-link-2').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

document.getElementById('mob-link-3').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

document.getElementById('mob-link-4').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

document.getElementById('mob-logo').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

const form = document.getElementById('form');

form.addEventListener('submit', function handleClick(e) {
  e.preventDefault();
  e.target.reset();
});
