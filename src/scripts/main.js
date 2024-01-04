'use strict';

const slider = document.querySelector('.header__slider');
const prevButton = document.querySelector('.slider__button--prev');

const nextButton = document.querySelector('.slider__button--next');

const sliders = ['slider--1', 'slider--2', 'slider--3'];

prevButton.addEventListener('click', () => {
  if (slider.classList.contains(sliders[0])) {
    slider.classList.remove(sliders[0]);
    slider.classList.add(sliders[2]);
  } else {
    for (let i = 1; i < 3; i++) {
      if (slider.classList.contains(sliders[i])) {
        slider.classList.remove(sliders[i]);
        slider.classList.add(sliders[i - 1]);
      }
    }
  }
});

nextButton.addEventListener('click', () => {
  if (slider.classList.contains(sliders[2])) {
    slider.classList.remove(sliders[2]);
    slider.classList.add(sliders[0]);
  } else {
    for (let i = 1; i >= 0; i--) {
      if (slider.classList.contains(sliders[i])) {
        slider.classList.remove(sliders[i]);
        slider.classList.add(sliders[i + 1]);
      }
    }
  }
});
