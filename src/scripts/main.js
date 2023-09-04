'use strict';

const slider = document.getElementById('slider');
const images = ['url(/slideImg1.808e87fa.jpg)',
  'url(/slideImg2.126f76b3.jpg)',
  'url(/slideImg3.b93f60cd.jpg)'];

const left = document.getElementById('goLeft');
const right = document.getElementById('goRight');

let counter = 0;

left.onclick = function() {
  counter--;

  if (counter < 0) {
    counter = 2;
  }

  slider.style.backgroundImage = images[counter];
};

right.onclick = function() {
  counter++;

  if (counter > 2) {
    counter = 0;
  }

  slider.style.backgroundImage = images[counter];
};
