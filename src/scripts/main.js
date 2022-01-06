'use strict';

const slider = document.querySelector('.slider');
const sliderButtons = slider.querySelectorAll('.slider__button');
const navBurger = document.querySelector('.nav__burger');
const navItems = document.querySelector('.nav__items');
const formBtn = document.querySelector('.button--form');
let sliderNumber = 1;

sliderButtons.forEach(button => {
  if (button.closest('.slider__button--left')) {
    button.addEventListener('click', () => {
      slider.classList.remove(`slider--bg-img-${sliderNumber}`);

      sliderNumber--;

      if (sliderNumber < 1) {
        sliderNumber = 3;
      }

      slider.classList.add(`slider--bg-img-${sliderNumber}`);
    });
  } else {
    button.addEventListener('click', () => {
      slider.classList.remove(`slider--bg-img-${sliderNumber}`);

      sliderNumber++;

      if (sliderNumber > 3) {
        sliderNumber = 1;
      }

      slider.classList.add(`slider--bg-img-${sliderNumber}`);
    });
  }
});

navBurger.addEventListener('click', () => {
  const openedNav = document.querySelector('.nav__burger--opened');

  if (!openedNav) {
    navItems.style.top = '0';
  } else {
    navItems.style.top = '-400px';
  }

  navBurger.classList.toggle('nav__burger--opened');
});

formBtn.addEventListener('click', e => {
  e.preventDefault();
});
