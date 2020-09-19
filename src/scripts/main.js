'use strict';

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(item => {
  item.addEventListener('click', () => {
    hideMenu();
  });
});

function hideMenu() {
  document.getElementById('toggler').checked = false;
}
