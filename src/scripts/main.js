'use strict';

const icon = document.querySelector('.icon');
const menu = document.querySelector('.header__menu');

const images = document.querySelectorAll('.slider__image');
const sliderLine = document.querySelector('.slider__line');
const slider = document.querySelector('.slider');
const sliderPrev = document.querySelector('.js-prev');
const sliderNext = document.querySelector('.js-next');
const page = document.querySelector('.page__body');

let count = 0;
let width;

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#menu') {
    icon.classList.remove('icon--close');
    menu.classList.remove('header__menu--open');
    page.classList.toggle('page__body--with-menu');
  }
});

icon.addEventListener('click', (e) => {
  icon.classList.toggle('icon--close');
  menu.classList.toggle('header__menu--open');
  page.classList.toggle('page__body--with-menu');
});

const footerMenu = document.querySelector('#footer-list');

changeFooterMenu(window.innerWidth);

window.addEventListener('resize', (e) => {
  changeFooterMenu(e.target.innerWidth);
  init();
});

init();

function changeFooterMenu(elem) {
  if (elem < 640) {
    footerMenu.classList.add('nav__list--column');
  } else {
    footerMenu.classList.remove('nav__list--column');
  }
}

const formReload = document.querySelector('.js-form');

formReload.addEventListener('submit', (e) => {
  e.preventDefault();
  formReload.reset();
}
);

sliderPrev.addEventListener('click', () => {
  count--;

  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

sliderNext.addEventListener('click', () => {
  count++;

  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

function init() {
  width = slider.offsetWidth;
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(i => {
    i.style.width = width + 'px';
  });
  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px';
}
