'use strict';

const slider = document.querySelector('.slider__container');
const left = document.querySelector('.slider__button--left');
const right = document.querySelector('.slider__button--right');

let position = 0;

left.addEventListener('click', function() {
  move(-1);
});

right.addEventListener('click', function() {
  move(1)
});

setInterval(function() {
  move(1);
}, 5000);

function move(shift) {
  const count = 3;

  position += shift;

  position = (position + count) % count;

  slider.style.transform = `translateX(${-position * 100}%)`;
}
