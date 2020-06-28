'use strict';

const menuIcon = document.querySelector('.menu-icon');
const menuIconLine = document.querySelector('.menu-icon-line');
const mobNav = document.querySelector('.mob__nav');

menuIcon.addEventListener('click', () => {
  menuIconLine.classList.toggle('menu-icon-active');
  mobNav.classList.toggle('mob__slide');
});

const button = document.querySelector('.strategic__button');

button.addEventListener('click', () => (
  window.location = '#description'
));
