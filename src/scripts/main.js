'use strict';

const slides = document.querySelectorAll('.slider__slide');
const nextSlide = document.querySelector('.slider__btn--next');

let curSlide = 0;

const maxSlide = slides.length - 1;

nextSlide.addEventListener('click', function() {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;

    if (slide.style.transform !== `translateX(${0}%)`) {
      slide.style.display = `none`;
    } else {
      slide.style.display = `block`;
    }
  });
});

const prevSlide = document.querySelector('.slider__btn--prev');

prevSlide.addEventListener('click', function() {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;

    if (slide.style.transform !== `translateX(${0}%)`) {
      slide.style.display = `none`;
    } else {
      slide.style.display = `block`;
    }
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
