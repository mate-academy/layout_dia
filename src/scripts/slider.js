'use strict';

const slider = document.querySelector('.slider');
const gallery = slider.querySelector('.slider__gallery');
let index = 0;

slider.querySelector('.slider__arrow-left').onclick = function() {
  --index;

  if (index < 0) {
    index = gallery.children.length - 1;
  }
  gallery.style.transform = `translateX(${-index * 100}%)`;
};

slider.querySelector('.slider__arrow-right').onclick = function() {
  ++index;

  if (index > gallery.children.length - 1) {
    index = 0;
  }
  gallery.style.transform = `translateX(${-index * 100}%)`;
};
