'use strict';

const container = document.querySelector('.container');
const style = window.getComputedStyle(container, null);
const width = parseInt(style.width);

const slider = document.getElementById('slider');
const list = slider.querySelector('ul');
const listElems = slider.querySelectorAll('li');

let position = 0;

slider.querySelector('.slider__button_left').onclick = function() {
  position += width;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

slider.querySelector('.slider__button_right').onclick = function() {
  position -= width;
  position = Math.max(position, -width * (listElems.length - 1));
  list.style.marginLeft = position + 'px';
  if (position === -width * 3) {
    position = width;
  }
};
