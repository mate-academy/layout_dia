'use strict';

const slider = document.getElementById('slider');
const list = slider.querySelector('ul');
const listElems = slider.querySelectorAll('li');

let position = 0;

const container = document.querySelector('.container');
const style = window.getComputedStyle(container, null);
const width = parseInt(style.width);

const moveLeft = function() {
  position += width;
  if (position > 0) {
    position = -width * (listElems.length - 1);
  }
  list.style.marginLeft = position + 'px';
};

const moveRight = function() {
  position -= width;
  if (position < -width * (listElems.length - 1)) {
    position = 0;
  }
  list.style.marginLeft = position + 'px';
};

let autoSwitch = setInterval(moveRight, 4000);

function count() {
  clearInterval(autoSwitch);
  setTimeout(() => { autoSwitch = setInterval(moveRight, 5000); }, 10000);
}

slider.querySelector('.slider__button_left').onclick = function() {
  moveLeft();
  count();
};

slider.querySelector('.slider__button_right').onclick = function() {
  moveRight();
  count();
};
