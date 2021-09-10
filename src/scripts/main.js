'use strict';

const list = document.querySelector('.slider__photo_container');
const prev = document.querySelector('.slider__button--left');
const next = document.querySelector('.slider__button--right');
let position = 0;

function move(shift) {
  const count = list.children.length;

  position += shift;
  position = (position + count) % count;

  list.style.transform = `translateX(${-position * 100}%)`;
}

next.addEventListener('click', function() {
  move(1);
});

prev.addEventListener('click', function() {
  move(-1);
});

setInterval(function() {
  move(1);
}, 5000);