'use strict';

const burgerMenuButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__menu');

const menuList = document.querySelector('.menu__list');

burgerMenuButton.addEventListener('click', openMenu);

function openMenu() {
  burgerMenu.classList.toggle('header__menu--active');

  if (burgerMenu.classList.contains('header__menu--active')) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
}

menuList.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu__link')
    && burgerMenu.classList.contains('header__menu--active')) {
    openMenu();
  }
});
