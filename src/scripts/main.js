'use strict';

import slide1 from '../images/what-we-do/what-we-do-1.jpg';
import slide2 from '../images/what-we-do/what-we-do-2.jpg';
import slide3 from '../images/what-we-do/what-we-do-3.jpg';

const burger = document.querySelector('.header-top__logo-box__burger');
const navigation = document.querySelector('.header-top__nav');
const desktop = window.matchMedia('(min-width: 1024px)');

function setMenuOpen(isOpen) {
  navigation.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

burger.addEventListener('click', () => {
  const isOpen = burger.getAttribute('aria-expanded') === 'true';

  setMenuOpen(!isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && !desktop.matches) {
    burger.focus();
    setMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    burger.getAttribute('aria-expanded') === 'true'
  ) {
    burger.focus();
    setMenuOpen(false);
  }
});

document.addEventListener('click', (event) => {
  if (!burger.contains(event.target) && !navigation.contains(event.target)) {
    setMenuOpen(false);
  }
});

desktop.addEventListener('change', () => {
  setMenuOpen(false);
});

const form = document.querySelector('.footer__form-box__form');
const slider = document.querySelector('.slider');

const leftButton = document.querySelector('a[aria-label="previous"]');
const rightButton = document.querySelector('a[aria-label="next"]');

const sliderImages = [
  `url("${slide1}")`,
  `url("${slide2}")`,
  `url("${slide3}")`,
];

let currentImage = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

rightButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentImage <= 2) {
    currentImage++;
  }

  if (currentImage > 2) {
    currentImage = 0;
  }

  slider.style.backgroundImage = sliderImages[currentImage];
});

leftButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentImage >= 0) {
    currentImage--;
  }

  if (currentImage < 0) {
    currentImage = 2;
  }

  slider.style.backgroundImage = sliderImages[currentImage];
});
