'use strict';

const images = [
  './src/images/photo-header.jpg',
  './src/images/slider/header-slider-laptop.jpg',
  './src/images/slider/header-slider-headphone.jpg',
];

let currentIndex = 0;

const image = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  image.src = images[currentIndex];
});

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('header__menu--open');
});

const links = document.querySelectorAll('.header__link');

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('header__menu--open');
  });
});

