'use strict';

const form = document.querySelector('.message__form');
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link');
const slider = document.querySelector('.slider');
const sliderImage = document.querySelector('.slider__image');
const sliderButtons = document.querySelectorAll('.slider__button');
const sliderLabel = document.querySelector('.slider__label');
const sliderText = document.querySelector('.slider__text');

const slides = [
  {
    image: new URL(
      '../images/slider/slide-img-1-figma-like.jpg',
      import.meta.url,
    ).href,
    alt: 'Creative team workspace',
    label: 'Intro',
    text: 'By the same illusion which lifts the horizon.',
  },
  {
    image: new URL('../images/slider/slide-img-1.jpg', import.meta.url).href,
    alt: 'Agency presentation table',
    label: 'Strategy',
    text: 'Bold ideas shaped into clear brand direction.',
  },
];

let activeSlide = 0;

// Keep the demo form on the page: validate, clear, then return to the top.
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      return;
    }

    form.reset();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

const closeMenu = () => {
  nav.classList.remove('nav--open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open menu');
};

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');

    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
}

const renderSlide = () => {
  const slide = slides[activeSlide];

  sliderImage.src = slide.image;
  sliderImage.alt = slide.alt;
  sliderLabel.textContent = slide.label;
  sliderText.textContent = slide.text;
};

if (slider && sliderImage && sliderLabel && sliderText) {
  sliderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const direction = button.dataset.sliderDirection;

      activeSlide =
        direction === 'next'
          ? (activeSlide + 1) % slides.length
          : (activeSlide - 1 + slides.length) % slides.length;

      renderSlide();
      button.blur();
    });
  });
}
