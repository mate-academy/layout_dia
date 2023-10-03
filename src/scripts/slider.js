'use strict';

const sliderBtnLeft = document.querySelector('.slider__arrow--left');
const sliderBtnRight = document.querySelector('.slider__arrow--right');
const slider = document.querySelector('.slider');
const sliderBox = document.querySelector('.slider__box');
const sliders = document.querySelectorAll('.slider__img');
let counter = 0;
let clientWidth;
const transitionDuration = '0.3s';

sliderBtnLeft.addEventListener('click', moveSlider);
sliderBtnRight.addEventListener('click', moveSlider);

init();

window.addEventListener('resize', () => {
  init();
});

function init() {
  counter = 0;
  clientWidth = document.documentElement.clientWidth;

  sliders.forEach(el => {
    el.style.minWidth = clientWidth + 'px';
  });
  computeSliderWidth();
  sliderBtnLeft.click();
}

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

function moveSlider({ target }) {
  const to = target.dataset.direction;
  const direction = {
    left: {
      changeCounter: counter + 1,
      counterLimit: 3,
    },

    right: {
      changeCounter: counter - 1,
      counterLimit: -1,
    },
  };

  document.documentElement.style.pointerEvents = 'none';
  counter = direction[to].changeCounter;
  sliderBox.style.transform = `translateX(${-counter * clientWidth}px)`;

  sliderBox.addEventListener('transitionend', () => {
    if (counter === direction[to].counterLimit) {
      loop(to);
    }

    if (sliderBox.style.transitionDuration !== '0s') {
      document.documentElement.style.pointerEvents = 'all';
    };
  }, { once: true });
}

function loop(to) {
  sliderBox.style.transitionDuration = '0s';
  counter = to === 'right' ? 2 : 0;
  sliderBox.style.transform = `translateX(-${clientWidth * counter}px)`;

  setTimeout(() => {
    sliderBox.style.transition = `transform ${transitionDuration} ease`;
    document.documentElement.style.pointerEvents = 'all';
  }, transitionDuration);
};
