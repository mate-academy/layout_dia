/* eslint-disable no-unused-vars */
'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu__aside') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const leftButton = document.querySelector('.sliders__button-left');
const rightButton = document.querySelector('.sliders__button-right');
let slideIndex = 1;

showSlider(slideIndex);

function nextSliders(n) {
  showSlider(slideIndex += n);
}

function showSlider(n) {
  let i;
  const slides = document.getElementsByClassName('sliders__content-photo');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

leftButton.addEventListener('click', () => nextSliders(-1));

rightButton.addEventListener('click', () => nextSliders(1));

const toggler = document.querySelector('.switcher__logo');

const headerSelector = document.querySelector('.header');
const infoButton = document.querySelector('.info__button');
const blockImages = document.querySelectorAll('.block__images');
const serviceBlock1 = document.querySelector('.service__block-001');
const serviceBlock2 = document.querySelector('.service__block-002');
const serviceBlock3 = document.querySelector('.service__block-003');
const serviceBlock4 = document.querySelector('.service__block-004');
const blockLink = document.querySelectorAll('.block__link');
const serviceNumbers = document.querySelectorAll('.service__block-number');
const blockDesign = document.querySelectorAll('.block__design-rec');
const sliderPhotos = document.querySelectorAll('.sliders__content-photo');
// eslint-disable-next-line max-len
const testimonialsBlock = document.querySelectorAll('.testimonials__block-icon');
const apply = document.querySelector('.apply');
const applyButton = document.querySelector('.apply__button');
const contacts = document.querySelector('.contact__wrapper');
const contactButton = document.querySelector('.contact__rows--button');
const footerClass = document.querySelector('.footer');
const navLink = document.querySelectorAll('.nav__link');
const menuAside = document.querySelector('.menu__aside');
const topBar = document.querySelector('.top-bar__logo');

toggler.addEventListener('click', () => {
  headerSelector.classList.toggle('header__switch');
  infoButton.classList.toggle('switch__button');
  infoButton.classList.toggle('switch__button-hover');
  serviceBlock1.classList.toggle('switch-shadow-blue');
  serviceBlock2.classList.toggle('switch-shadow-yellow');
  serviceBlock3.classList.toggle('switch-shadow-green');
  serviceBlock4.classList.toggle('switch-shadow-red');
  serviceNumbers[0].classList.toggle('switch-blue-number');
  serviceNumbers[1].classList.toggle('switch-yellow-number');
  serviceNumbers[2].classList.toggle('switch-green-number');
  serviceNumbers[3].classList.toggle('switch-red-number');
  blockLink[0].classList.toggle('switch-shadow-blue');
  blockLink[0].classList.toggle('switch-blue');
  blockLink[1].classList.toggle('switch-yellow');
  blockLink[1].classList.toggle('switch-shadow-yellow');
  blockLink[2].classList.toggle('switch-green');
  blockLink[2].classList.toggle('switch-shadow-green');
  blockLink[3].classList.toggle('switch-red');
  blockLink[3].classList.toggle('switch-shadow-red');

  blockDesign[0].classList.toggle('switch__rec-blue');
  blockDesign[1].classList.toggle('switch__rec-blue');
  blockDesign[2].classList.toggle('switch__rec-yellow');
  blockDesign[3].classList.toggle('switch__rec-yellow');
  blockDesign[4].classList.toggle('switch__rec-red');
  blockDesign[5].classList.toggle('switch__rec-red');

  testimonialsBlock[0].classList.toggle('switch__icon-blue');
  testimonialsBlock[1].classList.toggle('switch__icon-yellow');
  testimonialsBlock[2].classList.toggle('switch__icon-red');
  apply.classList.toggle('switch__apply');
  applyButton.classList.toggle('switch__button');
  applyButton.classList.toggle('switch__button-hover');
  contacts.classList.toggle('contact__switch');
  contactButton.classList.toggle('switch__button');
  contactButton.classList.toggle('switch__button-hover');
  footerClass.classList.toggle('footer__switch');
  menuAside.classList.toggle('switch__aside');
  topBar.classList.toggle('switch__logo-bar');

  for (let k = 0; k < navLink.length; k++) {
    navLink[k].classList.toggle('switch__link');
  }

  for (let k = 0; k < blockImages.length; k++) {
    blockImages[k].classList.toggle('shadow__switch');
  }

  for (let k = 0; k < sliderPhotos.length; k++) {
    sliderPhotos[k].classList.toggle('switch__slider');
  }
});
