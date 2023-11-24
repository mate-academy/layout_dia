/* eslint-disable no-console */
'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
  });
}
window.addEventListener('resize', init);
init();

document.querySelector('.slider__next').addEventListener('click', function() {
  count++;

  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
};
