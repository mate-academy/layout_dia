'use strict';

const slides = document.querySelectorAll('.slider__image');

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

const nextSlide = document.querySelector('.slider__arrow-right');

nextSlide.addEventListener('click', function() {
  curSlide++;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const maxSlide = 3;

nextSlide.addEventListener('click', function() {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else if (curSlide === 1) {
    curSlide = 1;
  } else if (curSlide === 2) {
    curSlide = 2;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector('.slider__arrow-left');

prevSlide.addEventListener('click', function() {
  if (curSlide === 0) {
    curSlide = 2;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
