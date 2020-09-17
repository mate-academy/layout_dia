'use strict';

const burger = document.querySelector('.burger');
const burgerItem = document.querySelectorAll('.burger__item');
const promo = document.querySelector('.promo');
const title = document.querySelector('.promo__title');
const menu = document.querySelector('.nav__list');
const navItem = document.querySelectorAll('.nav__item');
const navLink = document.querySelectorAll('.nav__link');
const headerLink = document.querySelector('.header__link');
const slider = document.querySelector('.slider');

burger.addEventListener('click', () => {
  menuToggle();
});

navLink.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('menu')) {
      menuToggle();
    }
  });
});

headerLink.addEventListener('click', () => {
  if (headerLink.classList.contains('menu')) {
    menuToggle();
  }
});

if (burgerItem.classList.contains('menu')) {
  window.addEventListener('orientationchange', () => {
    menuToggle();
  }, false);
}

function menuToggle() {
  burgerItem.forEach(item => {
    item.classList.toggle('menu');
  });

  promo.classList.toggle('menu');
  title.classList.toggle('menu');
  menu.classList.toggle('menu');

  navItem.forEach(item => {
    item.classList.toggle('menu');
  });

  navLink.forEach(item => {
    item.classList.toggle('menu');
  });

  headerLink.classList.toggle('menu');

  slider.classList.toggle('menu');
}
