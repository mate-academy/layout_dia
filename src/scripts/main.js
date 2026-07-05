'use strict';

import AOS from 'aos';
import 'aos/dist/aos.css';

const sliderPhoto = document.querySelector('.header__photo');
const prevButton = document.querySelector('.header__slider-button--prev');
const nextButton = document.querySelector('.header__slider-button--next');

const slideClasses = [
  'header__photo--slide-1',
  'header__photo--slide-2',
  'header__photo--slide-3',
];

let currentSlide = 0;

function showSlide(index) {
  sliderPhoto.classList.remove(...slideClasses);

  currentSlide = (index + slideClasses.length) % slideClasses.length;

  sliderPhoto.classList.add(slideClasses[currentSlide]);
}

prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

AOS.init({
  duration: 1500,
  easing: 'ease-out-cubic',
  once: true,
});

window.addEventListener('load', () => {
  AOS.refreshHard();
});

const scrollTopButton = document.querySelector('.page__scroll-top');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const isScrollingUp = currentScrollY < lastScrollY;
  const isFarFromTop = currentScrollY > 400;

  scrollTopButton.classList.toggle(
    'page__scroll-top--visible',
    isScrollingUp && isFarFromTop,
  );

  lastScrollY = currentScrollY;
});
