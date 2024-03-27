'use strict';

const images = document.querySelectorAll('.slider .slider-line .slider__img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = '390px';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__button--right')
  .addEventListener('click', function() {
    count++;

    if (count >= images.length) {
      count = 0;
    }

    rollSlider();
  });

document.querySelector('.slider__button--left')
  .addEventListener('click', function() {
    count--;

    if (count < 0) {
      count = images.length - 1;
    }

    rollSlider();
  });

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
