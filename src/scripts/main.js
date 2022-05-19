'use strict';

const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click', function() {
  iconMenu.classList.toggle('icon-menu--close');
  menu.classList.toggle('page-menu');
  document.body.classList.toggle('page__body--with-menu');

  if (iconMenu.classList.contains('icon-menu--close')) {
    const links = document.querySelectorAll('.menu__link');

    for (const elem of links) {
      elem.addEventListener('click', function() {
        iconMenu.classList.remove('icon-menu--close');
        menu.classList.remove('page-menu');
        document.body.classList.remove('page__body--with-menu');
      });
    }
  }
});
