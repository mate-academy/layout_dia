'use strict';

const navLink = document.querySelectorAll('.nav__link');
const form = document.querySelector('.form');

navLink.forEach(item => {
  item.addEventListener('click', () => {
    hideMenu();
  });
});

form.addEventListener('submit', (event) => {
  reloadPage(event);
});

function hideMenu() {
  document.getElementById('toggler').checked = false;
}

function reloadPage(event) {
  event.preventDefault();
  document.location.reload();
}
