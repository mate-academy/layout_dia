'use strict';

const navElement = document.querySelector('.header__nav');
const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.icon--menu');
const btnCross = document.querySelector('.icon--cross');

btnMenu.addEventListener('click', () => {
  navElement.classList.add('header__nav--active');
});

btnMenu.addEventListener('click', () => {
  menu.classList.add('menu--active');
});

btnCross.addEventListener('click', () => {
  navElement.classList.remove('header__nav--active');
});

btnCross.addEventListener('click', () => {
  menu.classList.add('menu--active');
});
