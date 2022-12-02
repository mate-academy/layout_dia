'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.querySelector('.slider').classList.add('slider-hidden');
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.querySelector('.slider').classList.remove('slider-hidden');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const arrowLeft = document.querySelector('.slider--arrow-left');
const arrowRight = document.querySelector('.slider--arrow-right');
const sliderImages = document.querySelectorAll('.slider__image');
let i = 0;

arrowLeft.addEventListener('click', () => {
  switch (i) {
    case 0:
      sliderImages[0].style.zIndex = 12;
      sliderImages[1].style.zIndex = 12;
      sliderImages[2].style.zIndex = 15;
      i = 2;
      break;

    case 1:
      sliderImages[0].style.zIndex = 15;
      sliderImages[1].style.zIndex = 12;
      sliderImages[2].style.zIndex = 12;
      i = 0;
      break;

    case 2:
      sliderImages[0].style.zIndex = 12;
      sliderImages[1].style.zIndex = 15;
      sliderImages[2].style.zIndex = 12;
      i = 1;
      break;
  }
});

arrowRight.addEventListener('click', () => {
  switch (i) {
    case 0:
      sliderImages[0].style.zIndex = 12;
      sliderImages[1].style.zIndex = 15;
      sliderImages[2].style.zIndex = 12;
      i = 1;
      break;

    case 1:
      sliderImages[0].style.zIndex = 12;
      sliderImages[1].style.zIndex = 12;
      sliderImages[2].style.zIndex = 15;
      i = 2;
      break;

    case 2:
      sliderImages[0].style.zIndex = 15;
      sliderImages[1].style.zIndex = 12;
      sliderImages[2].style.zIndex = 12;
      i = 0;
      break;
  }
});

const buttonChangeTopic = document.querySelector('.header__themeToggle');
const changedElements = document.querySelectorAll('[data-change]');

buttonChangeTopic.addEventListener('click', () => {
  if (buttonChangeTopic.classList.contains('header__themeToggle')) {
    buttonChangeTopic.classList.remove('header__themeToggle');
    buttonChangeTopic.classList.add('header__themeToggle--blue');

    changedElements.forEach(element => {
      if (element.dataset.change === 'theme') {
        element.dataset.change = 'blueTheme';
      }
    });
  } else {
    buttonChangeTopic.classList.remove('header__themeToggle--blue');
    buttonChangeTopic.classList.add('header__themeToggle');

    changedElements.forEach(element => {
      element.dataset.change = 'theme';
    });
  }
});
