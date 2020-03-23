'use strict';

const btnLeft = document.getElementById('btn-left');

const btnRight = document.getElementById('btn-right');

const images = [
  './images/slider/slide-1.png',
  './images/slider/slide-2.png',
  './images/slider/slide-3.png',
];

let num = 0;

btnLeft.onclick = function() {
  const slider = document.getElementById('slider');

  num++;

  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
};

btnRight.onclick = function() {
  const slider = document.getElementById('slider');

  num--;

  if (num < 0) {
    num = images.length - 1;
  }

  slider.src = images[num];
};
