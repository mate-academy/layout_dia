'use strict';

const btnPrev = document.querySelector('.slider__button--prev');
const btnNext = document.querySelector('.slider__button--next');
const list = document.querySelector('.slider__list');

const slideCount = list.childElementCount;

let currentPosition = 0;

function moveTo(targetPosition) {
  if (targetPosition < 0) {
    currentPosition = slideCount - 1;
  } else if (targetPosition > slideCount - 1) {
    currentPosition = 0;
  } else {
    currentPosition = targetPosition;
  }

  list.style.transform = `translateX(${-currentPosition * 100}%)`;
}

btnNext.addEventListener('click', () => {
  moveTo(currentPosition + 1);
});

btnPrev.addEventListener('click', () => {
  moveTo(currentPosition - 1);
});
