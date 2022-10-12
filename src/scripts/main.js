'use strict';

const selector = '.slider .slider__images .slider__image';
const images = document.querySelectorAll(selector);
const sliderLine = document.querySelector('.slider__images');
const leftBtn = document.querySelector('.slider__button--left');
const rightBtn = document.querySelector('.slider__button--right');
const formField = document.querySelector('#formField');

let count = 0;
let width;

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
  });

  rollSlider();
}

init();
window.addEventListener('resize', init);

leftBtn.addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

rightBtn.addEventListener('click', function() {
  count++;

  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

formField.addEventListener('submit', buttonClick);

function buttonClick(e) {
  e.preventDefault();
  formField.reset();
}

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
