'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const page = document.documentElement;
const switcher = document.querySelector('.theme-switcher');
const header = document.querySelector('.header');
const menuHire = document.querySelector('.menu__hire');
const hederButton = document.querySelector('.header__button-text');
const serviceCard1 = document.querySelector('.Services__card-001');
const serviceCard2 = document.querySelector('.Services__card-002');
const serviceCard3 = document.querySelector('.Services__card-003');
const serviceCard4 = document.querySelector('.Services__card-004');
const testimonialsBlocks = document.querySelectorAll('.Testimonials__blocks');
const passionButton = document.querySelector('.Passion__button');
const footer = document.querySelector('.footer');
const formField = document.querySelectorAll('.form__field');
const formButton = document.querySelector('.form__button');
const pageMenu = document.querySelector('.page__menu');

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--blue')) {
    page.classList.remove('page--blue');
    header.classList.remove('header--blue');
    switcher.classList.remove('theme-switcher--blue');
    menuHire.classList.remove('menu__hire--pink');
    hederButton.classList.remove('header__button-text--pink');
    serviceCard1.classList.remove('Services__card-001--blue');
    serviceCard2.classList.remove('Services__card-002--orange');
    serviceCard3.classList.remove('Services__card-003--green');
    serviceCard4.classList.remove('Services__card-004--red');

    testimonialsBlocks.forEach((element) => {
      element.classList.remove('Testimonials__blocks--blue');
    });

    passionButton.classList.remove('Passion__button--blue');
    footer.classList.remove('footer--blue');

    formField.forEach((element) => {
      element.classList.remove('form__field--blue');
    });

    formButton.classList.remove('form__button--blue');
    pageMenu.classList.remove('page__menu--blue');
  } else {
    page.classList.add('page--blue');
    header.classList.add('header--blue');
    switcher.classList.add('theme-switcher--blue');
    menuHire.classList.add('menu__hire--pink');
    hederButton.classList.add('header__button-text--pink');
    serviceCard1.classList.add('Services__card-001--blue');
    serviceCard2.classList.add('Services__card-002--orange');
    serviceCard3.classList.add('Services__card-003--green');
    serviceCard4.classList.add('Services__card-004--red');
    passionButton.classList.add('Passion__button--blue');
    footer.classList.add('footer--blue');

    formField.forEach((element) => {
      element.classList.add('form__field--blue');
    });

    formButton.classList.add('form__button--blue');

    testimonialsBlocks.forEach((element) => {
      element.classList.add('Testimonials__blocks--blue');
    });
    pageMenu.classList.add('page__menu--blue');
  }
});
