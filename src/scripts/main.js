'use strict';

let count = 1;

const rightButton = document.querySelector('.hero_screen__slider__buttons__button__right');
  rightButton.addEventListener('click', function () {
    function nextSlide() {
      count++;
      const slider = document.querySelector('.hero_screen__slider');

      if (count === 2) {
        slider.classList.remove('hero_screen__slider--slide_1');
        slider.classList.remove('hero_screen__slider--slide_3');
        slider.classList.add('hero_screen__slider--slide_2');
      }

      if (count === 3) {
        slider.classList.remove('hero_screen__slider--slide_1');
        slider.classList.remove('hero_screen__slider--slide_2');
        slider.classList.add('hero_screen__slider--slide_3');
      }

      if (count === 4) {
        count = 1;
      }

      if (count === 1) {
        slider.classList.remove('hero_screen__slider--slide_2');
        slider.classList.remove('hero_screen__slider--slide_3');
      }
    }
    nextSlide();
  });

const leftButton = document.querySelector('.hero_screen__slider__buttons__button__left');
  leftButton.addEventListener('click', function () {
    function previusSlide() {
      count--;
      const slider = document.querySelector('.hero_screen__slider');

      if (count <= 0) {
        count = 3;
      }

      if (count === 1) {
        slider.classList.remove('hero_screen__slider--slide_2');
        slider.classList.remove('hero_screen__slider--slide_3');
      }

      if (count === 2) {
        slider.classList.remove('hero_screen__slider--slide_1');
        slider.classList.remove('hero_screen__slider--slide_3');
        slider.classList.add('hero_screen__slider--slide_2');
      }

      if (count === 3) {
        slider.classList.remove('hero_screen__slider--slide_1');
        slider.classList.remove('hero_screen__slider--slide_2');
        slider.classList.add('hero_screen__slider--slide_3');
      }
    }
    previusSlide();
  });

