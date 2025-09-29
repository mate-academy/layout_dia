'use strict';

const burgerMenu = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.header__navigation');
const body = document.body;

const links = document.querySelectorAll('.header__link');

const imageWrapper = document.querySelector('.strategic-agency__image-wrapper');
const leftSwitch = document.querySelectorAll('.strategic-agency__switch')[0];
const rightSwitch = document.querySelectorAll('.strategic-agency__switch')[1];

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('header__navigation--active');

  body.classList.toggle('no-scroll');

  burgerMenu.classList.toggle('header__burger-menu--active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    body.classList.remove('no-scroll');
    menu.classList.remove('header__navigation--active');
    burgerMenu.classList.remove('header__burger-menu--active');
  });
});

const scrollStep = imageWrapper.clientWidth;

leftSwitch.addEventListener('click', () => {
  imageWrapper.scrollBy({
    left: -scrollStep,
    behavior: 'smooth',
  })
});

rightSwitch.addEventListener('click', () => {
  imageWrapper.scrollBy({
    left: scrollStep,
    behavior: 'smooth',
  })
});
