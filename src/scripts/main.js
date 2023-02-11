'use strict';

const slides = document.querySelectorAll('.slider__image');

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

const nextSlide = document.querySelector('.slider__arrow-right');

nextSlide.addEventListener('click', function(event) {
  event.preventDefault();
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

prevSlide.addEventListener('click', function(event) {
  event.preventDefault();

  if (curSlide === 0) {
    curSlide = 2;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('form').reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
