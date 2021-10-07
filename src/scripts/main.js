'use strict';

const list = document.querySelector('.slider__photo-container');
const prev = document.querySelector('.slider__button--prev');
const next = document.querySelector('.slider__button--next');

let position = 0;

function move(shift) {
  const count = list.children.length;

  position += shift;
  position = Math.abs(position) % count;

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
}, 7000);

document.querySelector('.nav__toggler')
  .addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('nav--open');
  });
