'use strict';

const body = document.querySelector('.page__body');
const menu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const menuList = document.querySelector('.menu__list');
const form = document.getElementById('form');
const sliderImages = document.querySelectorAll('.slider__slide');
const arrowLeft = document.querySelector('.slider__button--left');
const arrowRight = document.querySelector('.slider__button--right');
let current = 0;

menu.addEventListener('click', () => {
  body.classList.add('page__body--no-scroll');
});

closeMenu.addEventListener('click', () => {
  body.classList.remove('page__body--no-scroll');
});

menuList.addEventListener('click', (e) => {
  if (e.target.closest('.menu__link')) {
    body.classList.remove('page__body--no-scroll');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
