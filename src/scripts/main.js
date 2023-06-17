'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const sliderImages = document.querySelectorAll('.slider__image');
const sliderContainer = document.querySelector('.slider__container');
const buttonNext = document.querySelector('.slider__button--right');
const buttonPrev = document.querySelector('.slider__button--left');

let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderContainer.style.width = width * sliderImages.length + 'px';

  sliderImages.forEach(item => {
    item.style.width = width + 'px';
    item.style.hight = 'auto';
  });
  rollSlider();
}

window.addEventListener('resize', init);
init();

buttonPrev.addEventListener('click', () => {
  count--;

  if (count < 0) {
    count = sliderImages.length - 1;
  }
  rollSlider();
});

buttonNext.addEventListener('click', () => {
  count++;

  if (count >= sliderImages.length) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderContainer.style.transform = 'translate(-' + count * width + 'px)';
}
