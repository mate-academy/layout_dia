'use strict';

// disable reloading when submit form

function stopDefAction(event) {
  document.getElementById('form').reset();
  event.preventDefault();
}

document.getElementById('form').addEventListener(
  'submit', stopDefAction, false
);

// burger menu

const nav = document.querySelector('.nav__main');
const toggler = document.querySelector('.nav__icon--menu-opener');

toggler.addEventListener('click', function() {
  nav.classList.toggle('nav--open');
  toggler.classList.toggle('nav--open');
});
