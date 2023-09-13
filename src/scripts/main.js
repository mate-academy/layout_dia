'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

// toggling webpage themes from dark to ligth and vice versa

const changeTheme = document.querySelector('.change-theme');
const dark = document.querySelectorAll('[data-theme]');

changeTheme.addEventListener('click', () => {
  for (let i = 0; i < dark.length; i += 1) {
    if (dark[i].dataset.theme === 'dark') {
      dark[i].dataset.theme = 'ligth';
    } else {
      dark[i].dataset.theme = 'dark';
    }
  }
});

// carousel start

const right = document.querySelector('.slider__button--right');
const left = document.querySelector('.slider__button--left');
const slider = document.querySelector('.slider__container');
let sliderInd = 0;

left.disabled = sliderInd === 0;

const arrSlider = [...slider.children];

function carouselTranslateStyle(k) {
  left.disabled = k === 0;
  right.disabled = k === arrSlider.length - 1;

  slider.style.transform = `translateX(-${sliderInd * slider.clientWidth}px)`;
}

right.addEventListener('click', (e) => {
  sliderInd++;

  carouselTranslateStyle(sliderInd);
});

left.addEventListener('click', (e) => {
  sliderInd--;

  carouselTranslateStyle(sliderInd);
});
