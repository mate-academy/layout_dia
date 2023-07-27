'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const prevButton = document.querySelector('.slider__button--left');
const nextButton = document.querySelector('.slider__button--right');
const slides = document.querySelectorAll('.slider__image');
let currentSlide = 0;

selectSlide(currentSlide);

function plusSlide(number) {
  selectSlide((currentSlide += number));
}

function selectSlide(slide) {
  if (slide > slides.length - 1) {
    currentSlide = 0;
  }

  if (slide < 0) {
    currentSlide = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlide].style.display = 'block';
}

prevButton.addEventListener('click', () => plusSlide(-1));
nextButton.addEventListener('click', () => plusSlide(1));

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
