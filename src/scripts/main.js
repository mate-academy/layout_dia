'use strict';

const btnLeft = document.querySelector('.slider__arrow-left');
const btnRight = document.querySelector('.slider__arrow-right');
const sliderImg = document.querySelector('.slider');
let currentImageIndex = 0;

btnLeft.disabled = true;

btnLeft.addEventListener('click', () => {
  if (currentImageIndex !== 0) {
    currentImageIndex--;
    sliderImg.classList.remove(`slider__${currentImageIndex + 1}`);
    sliderImg.classList.add(`slider__${currentImageIndex}`);
    btnRight.disabled = false;
  }

  if (currentImageIndex === 0) {
    btnLeft.disabled = true;
  }
});

btnRight.addEventListener('click', () => {
  if (currentImageIndex !== 3) {
    currentImageIndex++;
    sliderImg.classList.remove(`slider__${currentImageIndex - 1}`);
    sliderImg.classList.add(`slider__${currentImageIndex}`);
    btnLeft.disabled = false;
  }

  if (currentImageIndex === 3) {
    btnRight.disabled = true;
  }
});
