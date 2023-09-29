'use strict';

const sliderBtnLeft = document.querySelector('.slider__arrow--left');
const sliderBtnRight = document.querySelector('.slider__arrow--right');
const sliderImagesBox = document.querySelector('.slider__images');
let clientWidth = document.documentElement.clientWidth;
let slideCounter = 0;

computeSliderWidth();

sliderImagesBox.style
  .gridTemplateColumns = `repeat(3, minmax(${clientWidth}px, 1fr))`;

sliderBtnLeft.addEventListener('click', slide);
sliderBtnRight.addEventListener('click', slide);

window.addEventListener('resize', () => {
  clientWidth = document.documentElement.clientWidth;
  computeSliderWidth();

  sliderImagesBox.style
    .gridTemplateColumns = `repeat(3, minmax(${clientWidth}px, 1fr))`;
});

function slide(event) {
  const direction = event.target.classList.contains('slider__arrow--left');

  switch (true) {
    case direction:
      slideCounter--;

      if (slideCounter === -3) {
        slideCounter = 0;
      }

      sliderImagesBox.style
        .transform = `translateX(${clientWidth * slideCounter}px)`;

      break;

    default:
      slideCounter++;

      if (slideCounter === 1) {
        slideCounter = -2;
      }

      sliderImagesBox.style
        .transform = `translateX(${clientWidth * slideCounter}px)`;
      break;
  }
}

function computeSliderWidth() {
  switch (true) {
    case (clientWidth >= 1600):
      sliderImagesBox.style.width = '687px';
      break;

    case (clientWidth >= 1024):
      sliderImagesBox.style.width = clientWidth / 2 + 'px';
      break;

    default:
      sliderImagesBox.style.width = clientWidth + 'px';
  }
}
