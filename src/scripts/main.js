'use strict';

const slides = document.querySelectorAll('.slider__image');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const prevButton = document.querySelector('.slider__button--left');
const nextButton = document.querySelector('.slider__button--right');

let currentSlideIndex = 0;

toShowSlide(currentSlideIndex);

function handleSlider(n) {
  toShowSlide(currentSlideIndex += n);
}

function toShowSlide(n) {
  if (n > slides.length - 1) {
    currentSlideIndex = 0;
  }

  if (n < 0) {
    currentSlideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlideIndex].style.display = 'block';
}

prevButton.addEventListener('click', () => handleSlider(-1));
nextButton.addEventListener('click', () => handleSlider(1));

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
