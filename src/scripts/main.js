'use strict';

const buttonOpen = document.querySelector('.nav__burger');
const buttonClose = document.querySelector('.nav__burger-close');
const nav = document.querySelector('.nav--mobile');

buttonOpen.addEventListener('click', () => {
  nav.style.transform = 'translate(0)';
});

buttonClose.addEventListener('click', () => {
  nav.style.transform = 'translate(-100%)';
});
