'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slider__slide');
  const prevButton = document.querySelector('.slider__nav-button--left');
  const nextButton = document.querySelector('.slider__nav-button--right');

  let currentSlideIndex = 0;

  slides[currentSlideIndex].classList.add('slider__slide--active');

  prevButton.addEventListener('click', () => {
    slides[currentSlideIndex].classList.remove('slider__slide--active');

    if (currentSlideIndex > 0) {
      currentSlideIndex--;
    } else {
      currentSlideIndex = slides.length - 1;
    }

    slides[currentSlideIndex].classList.add('slider__slide--active');
  });

  nextButton.addEventListener('click', () => {
    slides[currentSlideIndex].classList.remove('slider__slide--active');

    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
    } else {
      currentSlideIndex = 0;
    }
    slides[currentSlideIndex].classList.add('slider__slide--active');
  });
});

// form-reset
const form = document.querySelector('#form-reload');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
