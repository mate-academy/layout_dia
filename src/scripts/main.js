'use strict';

const page = document.querySelector('.page');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.nav__link');

const sliderBtnLeft = document.getElementById('slider-btn-left');
const sliderBtnRight = document.getElementById('slider-btn-right');
const slides = document.querySelectorAll('.slider__slide');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--close');
  menu.classList.toggle('menu--active');
  page.classList.toggle('page--fixed');
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('burger--close');
    menu.classList.remove('menu--active');
    page.classList.remove('page--fixed');
  })
})

changeSliderBtnsState();

sliderBtnLeft.addEventListener('click', () => {
  const activeSlide = getActiveSlide();

  if (activeSlide > 0) {
    removeActiveSlide();
    slides[activeSlide - 1].classList.add('slider__slide--active');
    changeSliderBtnsState();
  }
})

sliderBtnRight.addEventListener('click', () => {
  const activeSlide = getActiveSlide();

  if (activeSlide < slides.length - 1) {
    removeActiveSlide();
    slides[activeSlide + 1].classList.add('slider__slide--active');
    changeSliderBtnsState();
  }
})

function removeActiveSlide() {
  slides.forEach(slide => slide.classList.remove('slider__slide--active'));
}

function getActiveSlide() {
  return Array.from(slides).findIndex(slide => slide.classList.contains('slider__slide--active'));
}

function changeSliderBtnsState() {
  const activeSlide = getActiveSlide();

  sliderBtnLeft.disabled = activeSlide === 0;
  sliderBtnRight.disabled = activeSlide === slides.length - 1;
}