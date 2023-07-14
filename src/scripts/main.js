/* eslint-disable no-undef */
'use strict';
//  hamburger menu anumation

const icons = document.querySelectorAll('.nav-icon');
const links = document.querySelectorAll(
  '.nav__link, .logo, .button__link--type--up');
const menu = document.querySelector('.page__menu');

icons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    for (const ic of icons) {
      ic.classList.toggle('open');
    }
    menu.classList.toggle('page__menu__open');
  });
});

links.forEach(link => {
  link.addEventListener('click', clickHandler, (event) => {
    for (const ic of icons) {
      ic.classList.remove('open');
    }
  });
});

function clickHandler(e) {
  e.preventDefault();

  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  menu.classList.remove('page__menu__open');

  for (const ic of icons) {
    ic.classList.remove('open');
  }

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
