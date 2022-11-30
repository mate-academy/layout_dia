'use strict';

// Open and close menu
const page = document.querySelector('.page');
const nav = document.querySelector('.nav');
const menuOpener = document.querySelector('.header__menu-opener');
const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.querySelectorAll('input').forEach((input) => {
    input.value = '';
  });

  form.querySelectorAll('textarea').forEach((textarea) => {
    textarea.value = '';
  });
});

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('nav--open')) {
      nav.classList.remove('nav--open');
      page.style.overflowY = 'visible';
    }
  });
});

menuOpener.addEventListener('click', () => {
  if (nav.classList.contains('nav--open')) {
    nav.classList.remove('nav--open');
    page.style.overflowY = 'visible';
  } else {
    nav.classList.add('nav--open');
    page.style.overflowY = 'hidden';
  }
});

const sliderImage = document.querySelector('.header__slider-item');
const imageHeight = sliderImage.getBoundingClientRect().height;

const screenWidth = window.innerWidth;

// LowerThird Positioning
const lowerThird = document.querySelector('.header__lower-third-container');

if (screenWidth < 1024) {
  lowerThird.style.top = `${(imageHeight * 0.6)}px`;
} else {
  lowerThird.style.top = `${(imageHeight * 0.75)}px`;
}

// Refresh page on resize
window.addEventListener('resize', () => {
  window.location.reload();
});

// Slider
const buttons = document.querySelectorAll('[data-slider-button]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.sliderButton === 'right' ? 1 : -1;
    const slides = document.querySelector('[data-slider]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }

    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
