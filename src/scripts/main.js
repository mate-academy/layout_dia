'use strict';

const images = [
  './images/slider/slide-1.png',
  './images/slider/slide-2.png',
  './images/slider/slide-3.png',
];

let num = 0;

function next() {
  const slider = document.getElementById('slider');

  num++;

  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  const slider = document.getElementById('slider');

  num--;

  if (num < 0) {
    num = images.length - 1;
  }

  slider.src = images[num];
}

next();

prev();
