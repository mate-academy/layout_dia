'use strict';

const sliderImages = document.querySelectorAll('.slider__image');
const buttonLeft = document.querySelector('.slider__button--left');
const buttonRight = document.querySelector('.slider__button--right');

let currentImage = 0;

function nextImage() {
  sliderImages[currentImage].classList.remove('slider__image--active');

  currentImage += 1;

  if (currentImage > sliderImages.length - 1) {
    currentImage = 0;
  };

  sliderImages[currentImage].classList.add('slider__image--active');
}

function previousImage() {
  sliderImages[currentImage].classList.remove('slider__image--active');

  currentImage -= 1;

  if (currentImage < 0) {
    currentImage = sliderImages.length - 1;
  };

  sliderImages[currentImage].classList.add('slider__image--active');
}

buttonLeft.addEventListener('click', () => {
  previousImage();
});

buttonRight.addEventListener('click', () => {
  nextImage();
});
