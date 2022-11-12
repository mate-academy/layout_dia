'use strict';

const header = document.querySelector('.header');
const menuNav = document.querySelector('.menu__nav');
const menuIcon = document.querySelector('.icon-menu');

const form = document.querySelector('.contact-form__form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

header.addEventListener('click', (evt) => {
  if (evt.target.className === 'icon-menu'
      || evt.target.className === 'icon-menu icon-menu--active') {
    menuNav.classList.toggle('menu__nav--active');
    menuIcon.classList.toggle('icon-menu--active');
  }

  if (evt.target.tagName === 'A'
      || evt.target.tagName === 'IMG') {
    menuNav.classList.remove('menu__nav--active');
    menuIcon.classList.remove('icon-menu--active');
  }
});
