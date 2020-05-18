'use strict';

const slider = document.querySelector('.slider');
const images = [
  'url(../images/slider/slide-img-1.png)',
  'url(../images/slider/slide-img-2.png)',
  'url(../images/slider/slide-img-3.png)'];
let index = 0;

slider.querySelector('.slider__arrow-left').onclick = function() {
  if (index > 0) {
    slider.style.backgroundImage = images[--index];
  };
};

slider.querySelector('.slider__arrow-right').onclick = function() {
  if (index < images.length - 1) {
    slider.style.backgroundImage = images[++index];
  };
};
