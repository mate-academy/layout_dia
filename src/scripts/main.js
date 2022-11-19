'use strict';

const menuButton = document.querySelector('#menu');
const closeButton = document.querySelector('#cross');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

menuButton.addEventListener('click', () => {
  document.body.classList.add('page__body--with-menu');
  nav.classList.add('nav--active');
  menuButton.classList.add('hidden');
  closeButton.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('nav--active');
  menuButton.classList.remove('hidden');
  closeButton.classList.add('hidden');
  document.body.classList.remove('page__body--with-menu');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--active');
    menuButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
    document.body.classList.remove('page__body--with-menu');
  });
});
