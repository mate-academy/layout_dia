'use strict';

// --------------burger-menu---------------

const page = document.querySelector('.page');
const menuIcon = document.querySelector('.menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuList = document.querySelector('.burger-menu__list');

menuIcon.addEventListener('click', toggleMenu);
burgerMenuList.addEventListener('click', toggleMenu);

function toggleMenu() {
  page.classList.toggle('page--no-scroll');
  burgerMenu.classList.toggle('header__burger-menu--open');

  menuIcon.classList.toggle('menu-icon--open');
  menuIcon.classList.toggle('header__menu--screen--small');
}

// --------------slider--------------------
const sliderDuration = window.getComputedStyle(document.documentElement)
  .getPropertyValue('--slider-duration-js');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const sliderImages = document.querySelector('.slider-images');
let freeToSlide = true;
let mousIsOver = false;
const switchMouseToggler = function() {
  mousIsOver = !mousIsOver;
};

leftArrow.addEventListener('click', previousImg);
rightArrow.addEventListener('click', nextImg);
sliderImages.addEventListener('mouseover', switchMouseToggler);
sliderImages.addEventListener('mouseout', switchMouseToggler);

setInterval(() => {
  if (freeToSlide && !mousIsOver) {
    nextImg();
  }

  freeToSlide = true;
}, 8000);

function previousImg() {
  const leftImg = document.querySelector('.slider-images__img--previous');
  const currentImg = document.querySelector('.slider-images__img--shown');
  const rightImg = document.querySelector('.slider-images__img--next');

  leftArrow.removeEventListener('click', previousImg);
  rightArrow.removeEventListener('click', nextImg);

  freeToSlide = false;

  leftImg.classList.add('slider-images__img--moving');
  leftImg.classList.add('slider-images__img--shown');
  leftImg.classList.remove('slider-images__img--previous');

  setTimeout(() => {
    rightImg.classList.remove('slider-images__img--next');
    rightImg.classList.add('slider-images__img--previous');

    currentImg.classList.remove('slider-images__img--shown');
    currentImg.classList.add('slider-images__img--next');

    leftImg.classList.remove('slider-images__img--moving');

    leftArrow.addEventListener('click', previousImg);
    rightArrow.addEventListener('click', nextImg);
  }, sliderDuration);
};

function nextImg() {
  const leftImg = document.querySelector('.slider-images__img--previous');
  const currentImg = document.querySelector('.slider-images__img--shown');
  const rightImg = document.querySelector('.slider-images__img--next');

  leftArrow.removeEventListener('click', previousImg);
  rightArrow.removeEventListener('click', nextImg);

  freeToSlide = false;

  rightImg.classList.add('slider-images__img--moving');
  rightImg.classList.add('slider-images__img--shown');
  rightImg.classList.remove('slider-images__img--next');

  setTimeout(() => {
    leftImg.classList.remove('slider-images__img--previous');
    leftImg.classList.add('slider-images__img--next');

    currentImg.classList.remove('slider-images__img--shown');
    currentImg.classList.add('slider-images__img--previous');

    rightImg.classList.remove('slider-images__img--moving');

    leftArrow.addEventListener('click', previousImg);
    rightArrow.addEventListener('click', nextImg);
  }, sliderDuration);
};

// ------------ link up --------------

const linkUp = document.querySelector('.arrow-up-link');

window.addEventListener('scroll', showUpLink);

function showUpLink() {
  if (document.documentElement.scrollTop > 500) {
    linkUp.classList.add('arrow-up-link--visible');
  } else if (linkUp.classList.contains('arrow-up-link--visible')) {
    linkUp.classList.remove('arrow-up-link--visible');
  }
}

// ------------ form -----------------------

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.location.reload();
});
