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
const slides = document.querySelectorAll('.slider .slider__slide');
const sliderSlides = document.querySelector('.slider__content');
const prevBtn = document.querySelector('.slider__button--prev');
const nextBtn = document.querySelector('.slider__button--next');

let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderSlides.style.width = width * slides.length + 'px';

  slides.forEach(item => {
    item.style.width = width + 'px';
  });

  rollSlider();
}

init();
window.addEventListener('resize', init);

prevBtn.addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = slides.length - 1;
  }
  rollSlider();
});

nextBtn.addEventListener('click', function() {
  count++;

  if (count >= slides.length) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderSlides.style.transform = 'translate(-' + count * width + 'px)';
  sliderSlides.style.transition = 'transform 0.3s';
}
