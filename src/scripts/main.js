'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('form').reset();
});

const sliderWidth = document.querySelector('.slider').offsetWidth;
const slides = document.querySelectorAll('.slider__slide');
const sliderTrack = document.querySelector('.slider__track');
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');
const currentSlide = document.querySelector('.slider__slide--current');
let marginL = 0;

slides.forEach(el => {
  el.style.width = (100 / slides.length) + '%';
});

sliderTrack.style.width = (slides.length * 100) + '%';

buttonNext.addEventListener('click', () => {
  if (marginL === -(sliderWidth * (slides.length - 1))) {
    marginL = 0;
  } else {
    marginL -= sliderWidth;
  }

  currentSlide.style.marginLeft = marginL + 'px';
});

buttonPrev.addEventListener('click', () => {
  if (marginL === 0) {
    marginL = -sliderWidth * (slides.length - 1);
  } else {
    marginL += sliderWidth;
  }

  currentSlide.style.marginLeft = marginL + 'px';
});
