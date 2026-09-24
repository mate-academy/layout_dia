'use strict';

const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-button');
const navLinks = document.querySelectorAll('.nav__link');

function setMenuOpen(isOpen) {
  header.classList.toggle('header--menu-open', isOpen);
  document.body.classList.toggle('page__body--menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

menuButton.addEventListener('click', () => {
  setMenuOpen(!header.classList.contains('header--menu-open'));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

const slides = document.querySelectorAll('.slider__slide');
const prevButton = document.querySelector('.slider__arrow--prev');
const nextButton = document.querySelector('.slider__arrow--next');
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('slider__slide--active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('slider__slide--active');
}

prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();

    return;
  }

  form.reset();
  window.scrollTo({ top: 0 });
});
