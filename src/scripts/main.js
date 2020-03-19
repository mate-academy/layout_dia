'use strict';

// Top Navigation
const navBlock = document.getElementById('header__nav');
const navList = document.getElementById('nav__list');
const navLinks = document.querySelectorAll('.nav__link');
const btnMenu = document.getElementById('header__nav-button');

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

// Scroll button
const btnScroll = document.getElementById('page__button-scroll');

window.addEventListener('scroll', () => {
  if (pageYOffset > 600) {
    btnScroll.classList.add('page__button-scroll--show');
  } else {
    btnScroll.classList.remove('page__button-scroll--show');
  }
});
