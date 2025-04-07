'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slider__image');
  const totalSlides = slides.length;

  function changeSlide(direction) {
    slides[currentIndex].classList.remove('slider__image--active');
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('slider__image--active');
  }

  const leftButton = document.querySelector('.slider__button--left');
  const rightButton = document.querySelector('.slider__button--right');

  if (leftButton && rightButton) {
    leftButton.addEventListener('click', () => changeSlide(-1));
    rightButton.addEventListener('click', () => changeSlide(1));
  }
});
