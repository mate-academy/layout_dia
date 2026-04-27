'use strict';

const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');

if (header && burger) {
  burger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('header--open');

    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  document.querySelectorAll('.header__link').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('header--open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
    });
  });
}

const heroSlides = document.querySelector('.hero__slides');
const heroBtnLeft = document.querySelector('.hero__arrow--left');
const heroBtnRight = document.querySelector('.hero__arrow--right');
const HERO_TOTAL = 3;
let heroCurrent = 0;

function heroGoTo(index) {
  heroCurrent = (index + HERO_TOTAL) % HERO_TOTAL;
  heroSlides.style.transform = `translateX(-${heroCurrent * (100 / HERO_TOTAL)}%)`;
}

if (heroSlides && heroBtnLeft && heroBtnRight) {
  heroBtnLeft.addEventListener('click', () => heroGoTo(heroCurrent - 1));
  heroBtnRight.addEventListener('click', () => heroGoTo(heroCurrent + 1));
}

const form = document.querySelector('.contact__form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
