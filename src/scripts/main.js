'use strict';

const slider = document.querySelector('.slider');
const slids = document.querySelectorAll('.slider__slide');
const buttonRight = document.querySelector('.slider__button--next');
const buttonLeft = document.querySelector('.slider__button--prev');
const currentSlide = document.querySelector('.slider__slide--current');
const sliderTrack = document.querySelector('.slider__track');
let sliderWidth = slider.offsetWidth;

let marginL = 0;

const onResize = () => {
  sliderWidth = slider.offsetWidth;
};

slids.forEach((slide) => {
  slide.style.width = 100 / slids.length + '%';
});

sliderTrack.style.width = slids.length * 100 + '%';

buttonRight.addEventListener('click', () => {
  marginL <= -(sliderWidth * (slids.length - 1))
    ? (marginL = 0)
    : (marginL -= sliderWidth);

  currentSlide.style.marginLeft = marginL + 'px';
});

buttonLeft.addEventListener('click', () => {
  marginL >= 0
    ? (marginL = -sliderWidth * (slids.length - 1))
    : (marginL += sliderWidth);

  currentSlide.style.marginLeft = marginL + 'px';
});

window.addEventListener('resize', onResize);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('form').reset();
});
