'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// form
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

// slider with click
const sliderWrapper = document.querySelector('.slider__wrapper');
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
  clearInterval(intervalId);
  count--;

  if (count < 0) {
    count = sliderImages.length - 1;
  }
  rollSlider();
  autoSlide();
});

buttonNext.addEventListener('click', () => {
  clearInterval(intervalId);
  count++;

  if (count >= sliderImages.length) {
    count = 0;
  }
  rollSlider();
  autoSlide();
});

function rollSlider() {
  sliderContainer.style.transform = 'translate(-' + count * width + 'px)';
}

// autoslide
let imageIndex = 1;
let intervalId;

function autoSlide() {
  intervalId = setInterval(() => slideImages(++imageIndex), 2000);
};

autoSlide();

function slideImages() {
  imageIndex = imageIndex === sliderImages.length
    ? 0 : imageIndex < 0 ? sliderImages.length - 1 : imageIndex;
  sliderContainer.style.transform = 'translate(-' + imageIndex * width + 'px)';
}

sliderWrapper.addEventListener('mouseover', () => {
  clearInterval(intervalId);
});

sliderWrapper.addEventListener('mouseleave', autoSlide);
