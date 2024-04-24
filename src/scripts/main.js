'use strict';
let iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.documentElement.classList.toggle('menu-open');
  });
}

document.addEventListener('click', (e) => {
  if (
    e.target !== iconMenu &&
    document.documentElement.classList.contains('menu-open')
  )
    document.documentElement.classList.remove('menu-open');
});
