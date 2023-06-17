'use strict';

const header = document.querySelector('.header');
const switcher = document.querySelector('.theme-switcher');
const menu = document.querySelector('.menu');
const hire = document.querySelectorAll('.top-bar__hire');
const headerButton = document.querySelector('.header__button');
const sliderBorder = document.querySelector('.header__slider');
const navLinks = document.querySelectorAll('.nav__link');

switcher.addEventListener('click', () => {
  if (header.classList.contains('header--theme--dark')) {
    header.classList.remove('header--theme--dark');

    switcher.classList.remove('theme-switcher--theme--dark');

    menu.classList.remove('menu--theme--dark');

    hire.forEach((hireElement) => {
      hireElement.classList.remove('top-bar__hire--theme--dark');
    });

    headerButton.classList.remove('header__button--theme--dark');

    sliderBorder.classList.remove('header__slider--theme--dark');

    navLinks.forEach((link) => {
      link.classList.remove('nav__link--theme--dark');
    });

    isDarkImg = false;
  } else {
    header.classList.add('header--theme--dark');

    switcher.classList.add('theme-switcher--theme--dark');

    menu.classList.add('menu--theme--dark');

    headerButton.classList.add('header__button--theme--dark');

    sliderBorder.classList.add('header__slider--theme--dark');

    navLinks.forEach((link) => {
      link.classList.add('nav__link--theme--dark');
    });

    hire.forEach((hireElement) => {
      hireElement.classList.add('top-bar__hire--theme--dark');
    });

    isDarkImg = true;
  }
});

// Slider
const leftButton = document.querySelector('.slider__button--left');
const rightButton = document.querySelector('.slider__button--right');
const slider = document.querySelector('.header__slider');

const images = [
  '/main-slider-photo.835a4fe0.jpg',
  '/first-slider.947ff3b2.jpg',
  '/second-slider.054eda05.jpg',
];

const imagesDark = [
  '/theme-dark-slide-img.ed88ee99.png',
  '/first-slider.947ff3b2.jpg',
  '/second-slider.054eda05.jpg',
];

let currentImageIndex = 0;
let isDarkImg = false;

leftButton.addEventListener('click', function() {
  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = isDarkImg ? imagesDark.length - 1 : images.length - 1;
  }
  updateSliderBackground();
});

rightButton.addEventListener('click', function() {
  currentImageIndex++;

  if (isDarkImg) {
    if (currentImageIndex >= imagesDark.length) {
      currentImageIndex = 0;
    }
  } else {
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
  }

  updateSliderBackground();
});

function updateSliderBackground() {
  const currentImage
  = isDarkImg ? imagesDark[currentImageIndex] : images[currentImageIndex];

  slider.style.backgroundImage = `url('${currentImage}')`;
}

// Button-link
const button = document.querySelector('button[data-target="#Our-expertise"]');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const section = document.querySelector('#Our-expertise');

  section.scrollIntoView({ behavior: 'smooth' });
});
