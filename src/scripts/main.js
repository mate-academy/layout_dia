'use strict';

const overflowHidden = document.querySelector('.page__body');
const navElement = document.querySelector('.header__nav');
const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.icon--menu');
const btnCross = document.querySelector('.icon--cross');
const btnLink = document.querySelector('ul');

btnMenu.addEventListener('click', () => {
  navElement.classList.add('header__nav--active');
});

btnMenu.addEventListener('click', () => {
  overflowHidden.classList.add('page__body--active');
});

btnMenu.addEventListener('click', () => {
  menu.classList.add('menu--active');
});

btnCross.addEventListener('click', () => {
  overflowHidden.classList.remove('page__body--active');
});

btnLink.addEventListener('click', () => {
  overflowHidden.classList.remove('page__body--active');
});

btnLink.addEventListener('click', () => {
  navElement.classList.remove('header__nav--active');
});

btnLink.addEventListener('click', () => {
  menu.classList.remove('menu--active');
});

btnCross.addEventListener('click', () => {
  navElement.classList.remove('header__nav--active');
});

btnCross.addEventListener('click', () => {
  menu.classList.remove('menu--active');
});
