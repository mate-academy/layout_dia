'use strict';

const images = document.querySelectorAll('.slider .sliderB-line img');
const sliderLine = document.querySelector('.slider .sliderB-line');
const slider = document.querySelector('.slider');

let count = 0;
let width;

function init() {
  width = slider.offsetWidth;

  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });

  rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function() {
  count++;

  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

/* for small */

const imagesSmall = document.querySelectorAll(
  '.slider-small .sliderB-small-line img');
const sliderLineSmall = document.querySelector(
  '.slider-small .sliderB-small-line');
const sliderSmall = document.querySelector(
  '.slider-small');

let countSmall = 0;
let widthSmall;

function initSmall() {
  widthSmall = sliderSmall.offsetWidth;
  sliderLineSmall.style.width = widthSmall * imagesSmall.length + 'px';

  imagesSmall.forEach(item => {
    item.style.width = widthSmall + 'px';
    item.style.height = 'auto';
  });

  rollSliderSmall();
}

initSmall();
window.addEventListener('resize', initSmall);

document.querySelector(
  '.slider-small-next').addEventListener('click', function() {
  countSmall++;

  if (countSmall >= imagesSmall.length) {
    countSmall = 0;
  }
  rollSliderSmall();
});

document.querySelector(
  '.slider-small-prev').addEventListener('click', function() {
  countSmall--;

  if (countSmall < 0) {
    countSmall = imagesSmall.length - 1;
  }
  rollSliderSmall();
});

function rollSliderSmall() {
  sliderLineSmall.style.transform
   = 'translate(-' + countSmall * widthSmall + 'px)';
}

const myform = document.querySelector('#myform');

myform.addEventListener('submit', checkSubmit);

function checkSubmit(event) {
  event.preventDefault();
  myform.reset();
}
