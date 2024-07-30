/* eslint-disable no-console */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0; // начальный индекс слайда
  const slides = document.querySelectorAll('.slider__images--image');

  const showSlide = (index, needTransition = true) => {
    slides.forEach(slide => {
      slide.style.transition = needTransition ? 'transform .8s' : 'none';
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  };

  const updateSlide = (newIndex) => {
    if (newIndex < 0) {
      currentSlide = slides.length - 1;
    } else if (newIndex >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = newIndex;
    }
    showSlide(currentSlide);
  };

  const nextSlide = () => {
    updateSlide(currentSlide + 1);
    console.log('right');
  };

  const prevSlide = () => {
    updateSlide(currentSlide - 1);
    console.log('left');
  };

  const leftButton = document.querySelector('.slider__buttons--left');
  const rightButton = document.querySelector('.slider__buttons--right');

  if (leftButton) {
    leftButton.addEventListener('click', prevSlide);
  } else {
    console.error('Left button not found');
  }

  if (rightButton) {
    rightButton.addEventListener('click', nextSlide);
  } else {
    console.error('Right button not found');
  }

  setInterval(nextSlide, 5000);
});
