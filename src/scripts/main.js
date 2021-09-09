'use strict';

const list = document.querySelector('.header__image-box');
const right = document.querySelector('.slider__arrow--right');
const left = document.querySelector('.slider__arrow--left');

let position = 0;

move(0);

right.addEventListener('click', function() {
  move(1);
});

left.addEventListener('click', function() {
  move(-1);
});

function move(shift) {
  const count = list.children.length;

  position += shift;

  right.disabled = position >= count - 1;
  left.disabled = position <= 0;

  list.classList.remove(`list--${position - 1}`);
  list.classList.remove(`list--${position + 1}`);
  list.classList.add(`list--${position}`);

  position = (position + count) % count;

  list.style.transform = `translateX(${-position * 100}%)`;
}
