'use strict';

const sliderBtnLeft = document.querySelector('.slider__arrow--left');
const sliderBtnRight = document.querySelector('.slider__arrow--right');
const sliderImagesBox = document.querySelector('.slider__images');
let clientWidth = document.documentElement.clientWidth;

clientWidth = document.documentElement.clientWidth;
sliderImagesBox.style.width = clientWidth + 'px';

sliderImagesBox.style
  .gridTemplateColumns = `repeat(3, minmax(${clientWidth}px, 1fr))`;

window.addEventListener('resize', () => {
  clientWidth = document.documentElement.clientWidth;
  sliderImagesBox.style.width = clientWidth + 'px';

  sliderImagesBox.style
    .gridTemplateColumns = `repeat(3, minmax(${clientWidth}px, 1fr))`;
});

let slideCounter = 0;

sliderBtnLeft.addEventListener('click', slide);
sliderBtnRight.addEventListener('click', slide);

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
