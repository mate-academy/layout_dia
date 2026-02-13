'use strict';

const page = document.querySelector('.page');
const slider = page.querySelector('.slider');
const sliderImages = slider.querySelectorAll('.slider__image');
const prevBtn = slider.querySelector('.slider__prev');
const nextBtn = slider.querySelector('.slider__next');

let currentIndex = 0;

function resetIndex() {
  if (currentIndex === sliderImages.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = sliderImages.length - 1;
  }
};

function changeSlide(direction) {
  sliderImages[currentIndex].classList.remove('slider__image--active');
  currentIndex += direction;
  resetIndex();
  sliderImages[currentIndex].classList.add('slider__image--active');
}

nextBtn.addEventListener('click', () => changeSlide(1));

prevBtn.addEventListener('click', () => changeSlide(-1));
