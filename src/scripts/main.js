'use strict';

const menuShow = () => {
  const showMenu = document.querySelector('.show-menu');
  const hideMenu = document.querySelector('.close-menu');
  const navItem = document.querySelector('.nav__list');
  const nav = document.querySelector('.nav-header');

  showMenu.addEventListener('click', () => {
    nav.classList.add('show-nav');
    nav.classList.remove('hide-nav');
  });

  hideMenu.addEventListener('click', () => {
    nav.classList.add('hide-nav');
    nav.classList.remove('show-nav');
  });

  navItem.addEventListener('click', () => {
    nav.classList.remove('show-nav');
    nav.classList.add('hide-nav');
  });
};

menuShow();
