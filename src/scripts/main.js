'use strict';

document.getElementById('sendMessage').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
});

const showMenu = document.getElementById('show-menu');
const navList = document.getElementById('nav-list');

document.addEventListener('click', (event) => {
  if (event.target === showMenu) {
    showMenu.addEventListener('click', () => {
      navList.style.right = 0;
    });
  } else {
    navList.style.right = '100vw';
  }
});
