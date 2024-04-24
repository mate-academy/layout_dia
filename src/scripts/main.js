'use strict';
let iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
  document.addEventListener('click', function (e) {
    document.documentElement.classList.toggle('menu-open');
  });
}
if (!document.documentElement.classList.contains('menu-open')) {
  document.documentElement.classList.remove('menu-open');
}
