'use strict';

// Menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Slider
const prevButton = document.querySelector('.slider__button--left');
const nextButton = document.querySelector('.slider__button--right');
let slideIndex = 0;

showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slider__image');

  if (n > slides.length - 1) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

prevButton.addEventListener('click', () => plusSlide(-1));
nextButton.addEventListener('click', () => plusSlide(1));

// Form
const form = document.querySelector('.footer__form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  this.reset();
}
