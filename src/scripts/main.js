'use strict';

const rootStyles = getComputedStyle(document.documentElement);
const breakpoints = {
  sm: parseInt(rootStyles.getPropertyValue('--bp-sm'), 10),
  md: parseInt(rootStyles.getPropertyValue('--bp-md'), 10),
  lg: parseInt(rootStyles.getPropertyValue('--bp-lg'), 10),
  xl: parseInt(rootStyles.getPropertyValue('--bp-xl'), 10),
  '2xl': parseInt(rootStyles.getPropertyValue('--bp-2xl'), 10),
};

const line = document.querySelector('.slider__line');
const slides = document.querySelectorAll('.slider__item');
const listLength = slides.length;
const nextBtn = document.querySelector('.slider__btn--right');
const prevBtn = document.querySelector('.slider__btn--left');

let index = 0;
let slideWidth;

const rollSlider = (step = 0) => {
  const prevIndex = index;
  const nextIndex = (index + step + listLength) % listLength;

  index = nextIndex;

  if (window.innerWidth >= breakpoints.lg) {
    line.style.transform = 'translateX(0)';
  } else {
    line.style.transform = `translateX(${-nextIndex * slideWidth}px)`;
  }

  slides[prevIndex].classList.remove('slider__item--active');
  slides[nextIndex].classList.add('slider__item--active');
};

const init = () => {
  const viewport = document.querySelector('.slider__viewport');

  if (!viewport) {
    return;
  }

  slideWidth = viewport.offsetWidth;

  slides.forEach((item) => {
    item.style.width = slideWidth + 'px';
  });

  rollSlider();
};

window.addEventListener('resize', init);
init();

nextBtn.addEventListener('click', () => {
  console.log('test');

  if (index >= slides.length) {
    index = 0;
  }
  rollSlider(1);
});

prevBtn.addEventListener('click', () => {
  console.log('test');

  if (index < 0) {
    index = slides.length - 1;
  }
  rollSlider(-1);
});
