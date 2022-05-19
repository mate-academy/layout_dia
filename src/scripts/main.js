'use strict';

const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click', function() {
  iconMenu.classList.toggle('icon-menu--close');
  menu.classList.toggle('page-menu');
  document.body.classList.toggle('page__body--with-menu');
});
