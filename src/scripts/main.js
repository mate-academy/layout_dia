'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.elements.email.value = '';
  form.elements.name.value = '';
  form.elements.text.value = '';
});

const kek = document.querySelector('.page__body');

const menu = document.querySelector('.menu_open');
const closedd = document.querySelectorAll('.menu__link--header');

menu.addEventListener('click', () => {
  kek.style.overflow = 'hidden';
});

[...closedd].map(a => a.addEventListener('click', () => {
  kek.style.overflow = 'visible';
}));
