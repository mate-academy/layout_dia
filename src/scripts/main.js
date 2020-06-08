'use strict';

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider__arrow-left');
const nextButton = document.querySelector('.slider__arrow-right');
const countItems = document.querySelectorAll('.slider__item').length;
const mainLength = 687;
let transformLength = 0;

prevButton.addEventListener('click', prevButtonClick);
nextButton.addEventListener('click', nextButtonClick);

function prevButtonClick(e) {
  if (transformLength === 0) {
    transformLength = -(countItems - 1) * mainLength;
    slider.style = `transform: translateX(${transformLength}px);`;
  } else {
    slider.style = `transform:
    translateX(calc(${transformLength}px + ${mainLength}px));`;
    transformLength += mainLength;
  }
}

function nextButtonClick(e) {
  if (transformLength < -(countItems * mainLength) / 2) {
    transformLength = 0;

    slider.style = `transform:
      translateX(calc(${transformLength}px);`;
  } else {
    slider.style = `transform:
      translateX(calc(${transformLength}px - ${mainLength}px));`;
    transformLength -= mainLength;
  }
}
