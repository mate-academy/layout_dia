'use strict';

const prev = document.getElementById('slider__prev');
const next = document.getElementById('slider__next');
const slider = document.getElementById('slider');

let currentSlider = 1;

prev.classList.add('slider__arrow--disable');

const setSliderImage = () => {
  slider.style.backgroundImage = `url(../images/slider/${currentSlider}.png)`;
};

prev.addEventListener('click', () => {
  if (currentSlider !== 1) {
    currentSlider--;
    next.classList.remove('slider__arrow--disable');

    setSliderImage();

    if (currentSlider === 1) {
      prev.classList.add('slider__arrow--disable');
    }
  }
});

next.addEventListener('click', () => {
  if (currentSlider !== 3) {
    currentSlider++;
    prev.classList.remove('slider__arrow--disable');

    setSliderImage();

    if (currentSlider === 3) {
      next.classList.add('slider__arrow--disable');
    }
  }
});
