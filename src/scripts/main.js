'use strict';

const width = 1146;

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
};
