'use strict';

const leftButton = document.querySelector('.arrow--left');
const rightButton = document.querySelector('.arrow--right');
const list = document.querySelectorAll('.slider__img');
const listLength = list.length;
let current = 0;

const changeSlide = (step) => {
  list[current].classList.remove('slider__img--active');

  current = (current + step + listLength) % listLength;

  list[current].classList.add('slider__img--active');
};

rightButton.addEventListener('click', () => {
  changeSlide(1);
});

leftButton.addEventListener('click', () => {
  changeSlide(-1);
});
