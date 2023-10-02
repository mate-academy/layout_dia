'use strict';

const sliderBtnLeft = document.querySelector('.slider__arrow--left');
// const sliderBtnRight = document.querySelector('.slider__arrow--right');
const slider = document.querySelector('.slider');
const sliders = document.querySelectorAll('.slider__img');

sliders.forEach(el => {
  el.remove();
});

let step = 0;
let offset = 0;

let clientWidth = document.documentElement.clientWidth;

sliders.forEach(el => {
  el.style.minWidth = clientWidth + 'px';
});

computeSliderWidth();

sliderBtnLeft.addEventListener('click', left);
// sliderBtnRight.addEventListener('click', moveSlide);

window.addEventListener('resize', () => {
  clientWidth = document.documentElement.clientWidth;
  computeSliderWidth();
});

function computeSliderWidth() {
  switch (true) {
    case (clientWidth >= 1600):
      slider.style.width = '687px';
      break;

    case (clientWidth >= 1024):
      slider.style.width = clientWidth / 2 + 'px';
      break;

    default:
      slider.style.width = clientWidth + 'px';
  }
}

function createSlide() {
  const slide = document.createElement('div');
  const sliderTitle = document.createElement('p');
  const sliderDescription = document.createElement('p');

  sliderTitle.classList.add('slider__title');
  sliderDescription.classList.add('slider__description');
  sliderTitle.textContent = 'Intro';

  sliderDescription.textContent
    = 'By the same illusion which lifts the horizon.';

  slide.append(sliderTitle);
  slide.append(sliderDescription);
  slide.classList.add(`slider__img--${step + 1}`, 'slider__img');
  slide.style.left = offset * clientWidth + 'px';

  slider.appendChild(slide);

  if (step + 1 === 3) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
};

function left() {
  sliderBtnLeft.removeEventListener('click', left);

  const sliders2 = document.querySelectorAll('.slider__img');
  let offset2 = 0;

  sliders2.forEach(el => {
    el.style.left = offset2 * clientWidth - clientWidth + 'px';
    offset2++;
  });

  setTimeout(() => {
    sliders2[0].remove();
    createSlide();
    sliderBtnLeft.addEventListener('click', left);
  }, 1000);
}

createSlide(); createSlide();
