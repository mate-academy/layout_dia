'use strict';

const sliderCollection = Array.from(document.querySelectorAll('.slide'));
const moveBack = document.querySelector('.arrow__right');
const moveForward = document.querySelector('.arrow__left');
const sliderWrapper = document.querySelector('.slider__wrapper');

let index = 0;

moveForward.addEventListener('click', () => {
  sliderCollection[index].classList.remove('active');
  if (index >= sliderCollection.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  sliderCollection[index].classList.add('active');
});

moveBack.addEventListener('click', () => {
  sliderCollection[index].classList.remove('active');
  if (index < 1) {
    index = sliderCollection.length - 1;
  } else {
    index -= 1;
  }
  sliderCollection[index].classList.add('active');
});
