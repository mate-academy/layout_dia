'use strict';

const sliderLine = document.querySelector('.slider__line');
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');
let position = 'first';

buttonNext.addEventListener('click', () => {
  if (position !== 'second') {
    sliderLine.classList.add('slider__line--switched');
    position = 'second';
  }
});

buttonPrev.addEventListener('click', () => {
  if (position !== 'first') {
    sliderLine.classList.remove('slider__line--switched');
    position = 'first';
  }
});
