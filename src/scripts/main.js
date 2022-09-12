'use strict';

const slides = [
  'slider__slide--1',
  'slider__slide--2',
  'slider__slide--3',
  'slider__slide--4',
];

const slide = document.querySelector('.slider__slide');
const sliderLeftBtn = document.querySelector('.slider__btn--left');
const sliderRightBtn = document.querySelector('.slider__btn--right');

const slideLeft = () => {
  const classList = Object.entries(slide.classList).map(el => el[1]);
  const currSlide = classList.filter(el => el.match(/slider__slide--/))[0];
  const currSlideIdx = slides.indexOf(currSlide);
  let nextSlideIdx = currSlideIdx - 1;

  if (nextSlideIdx < 0) {
    nextSlideIdx = slides.length - 1;
  }

  const nextSlide = slides[nextSlideIdx];

  slide.classList.remove(currSlide);
  slide.classList.add(nextSlide);
};

const slideRight = () => {
  const classList = Object.entries(slide.classList).map(el => el[1]);
  const currSlide = classList.filter(el => el.match(/slider__slide--/))[0];
  const currSlideIdx = slides.indexOf(currSlide);
  let nextSlideIdx = currSlideIdx + 1;

  if (nextSlideIdx > slides.length - 1) {
    nextSlideIdx = 0;
  }

  const nextSlide = slides[nextSlideIdx];

  slide.classList.remove(currSlide);
  slide.classList.add(nextSlide);
};

sliderLeftBtn.addEventListener('click', slideLeft);
sliderRightBtn.addEventListener('click', slideRight);

const navMobile = document.querySelector('.nav-mobile');
const menuOpener = document.querySelector('.header__menu-toggler');
const menuCloser = document.querySelector('.nav-mobile__cross');

const menuOpen = () => {
  navMobile.classList.add('nav-mobile--opened');
};

const menuClose = () => {
  navMobile.classList.remove('nav-mobile--opened');
};

menuOpener.addEventListener('click', menuOpen);
menuCloser.addEventListener('click', menuClose);
