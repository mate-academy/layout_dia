'use strict';

const list = document.querySelector('.slider__list');
const prev = document.querySelector('.slider__button--left');
const next = document.querySelector('.slider__button--right');

let position = 0;

next.addEventListener('click', () => {
  const count = list.children.length;

  position += 1;

  if (position >= count) {
    position = 0;
  }

  list.style.transform = `translateX(${-position * 100}%)`;
});

prev.addEventListener('click', () => {
  const count = list.children.length;

  position -= 1;

  if (position < 0) {
    position = count - 1;
  }

  list.style.transform = `translateX(${-position * 100}%)`;
});
