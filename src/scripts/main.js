'use strict';

const menuButton = document.querySelector('.nav__toggler-label');
const navLinks = document.querySelector('.nav__list');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const sliderContent = document.querySelector('.slider__img-container');
const prevBtn = document.querySelector('.slider__button--prev');
const nextBtn = document.querySelector('.slider__button--next');

const img = ['slider-1', 'slider-2', 'slider-3', 'slider-4',
  'slider-5', 'slider-6'];
let i = img.length;

nextBtn.addEventListener('click', () => {
  if (i < img.length - 1) {
    i += 1;
  } else {
    i = 1;
  }

  sliderContent.innerHTML = '<img src=./images/slider/'
  + img[i] + '.jpeg class=slider__img>';
});

prevBtn.addEventListener('click', () => {
  if (i < img.length + 1 && i > 1) {
    i -= 1;
  } else {
    i = img.length - 1;
  }

  sliderContent.innerHTML = '<img src=./images/slider/'
  + img[i] + '.jpeg class=slider__img>';
});
