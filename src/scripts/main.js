'use strict';

const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.page__menu');

if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

const menuLinks = document.querySelectorAll('.menu__link');

function onMenuLinkClik(event) {
  if (iconMenu.classList.contains('active')) {
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
  }
}

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClik);
  });
}

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
