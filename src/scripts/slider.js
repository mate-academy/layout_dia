'use strict';

const sliderImages = document.querySelectorAll('.slider__img');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');

let counter = 1;

function addImage(n) {
  showImage(counter += n);
}

function showImage(n) {
  if (n > sliderImages.length) {
    counter = 1;
  }

  if (n < 1) {
    counter = sliderImages.length;
  }

  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }

  sliderImages[counter - 1].style.display = 'block';
}

showImage(counter);

nextButton.addEventListener('click', (event) => {
  event.preventDefault();

  addImage(1);
});

prevButton.addEventListener('click', (event) => {
  event.preventDefault();

  addImage(-1);
});
