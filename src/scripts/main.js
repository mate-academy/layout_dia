'use strict';

const leftButton = document.querySelector('.slider__button--left');
const rightButton = document.querySelector('.slider__button--right');

const sliderImage1 = document.querySelector('.slider__photo--1');
const sliderImage2 = document.querySelector('.slider__photo--2');

rightButton.addEventListener('click', () => {
  sliderImage1.classList.toggle('slider__photo--is-active');
  sliderImage2.classList.toggle('slider__photo--is-active');
});

leftButton.addEventListener('click', () => {
  sliderImage1.classList.toggle('slider__photo--is-active');
  sliderImage2.classList.toggle('slider__photo--is-active');
});
