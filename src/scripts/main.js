'use strict';

const menuOpener = document.querySelector('.nav__button--open');
const menuCloser = document.querySelector('.nav__button--close');
const footerMenuOpener = document.querySelector('.nav__button--open-footer');
const footerMenuCloser = document.querySelector('.nav__button--close-footer');
const body = document.querySelector('.page__body');
const slider = document.querySelector('.slider__container');
const left = document.querySelector('.slider__button--left');
const right = document.querySelector('.slider__button--right');

let position = 0;

menuOpener.addEventListener('click', function() {
  body.classList.add('page__body--overflow-hidden');
});

menuCloser.addEventListener('click', function() {
  body.classList.remove('page__body--overflow-hidden');
});

footerMenuOpener.addEventListener('click', function() {
  body.classList.add('page__body--overflow-hidden');
});

footerMenuCloser.addEventListener('click', function() {
  body.classList.remove('page__body--overflow-hidden');
});

left.addEventListener('click', function() {
  move(-1);
});

right.addEventListener('click', function() {
  move(1);
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
