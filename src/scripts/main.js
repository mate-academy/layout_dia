'use strict';

const list = document.querySelector('.slider__list');
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');

let position = 0;

move(0);

// Ждём клик от пользователя на кнопке Next
next.addEventListener('click', function() {
  move(1);
});

// Ждём клик от пользователя на кнопке Prev
prev.addEventListener('click', function() {
  move(-1);
});

function move(shift) {
  const count = list.children.length;

  position += shift;

  next.disabled = position >= count - 1;
  prev.disabled = position <= 0;

  position = (position + count) % count;

  list.style.transform = `translateX(${-position * 100}%)`;
}
