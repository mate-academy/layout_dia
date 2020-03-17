'use strict';

const navBlock = document.querySelector('#header__nav');
const navList = document.querySelector('#nav__list');
const navLinks = document.querySelectorAll('.nav__link');
const btnMenu = document.querySelector('#header__nav-button');

btnMenu.addEventListener('click', () => {
  navBlock.classList.toggle('header__nav--show');
  navList.classList.toggle('nav__list--mobile');
  btnMenu.classList.toggle('header__nav-button--close');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navBlock.classList.remove('header__nav--show');
    btnMenu.classList.remove('header__nav-button--close');
  });
});
