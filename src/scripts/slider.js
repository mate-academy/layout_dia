'use strict';

const sliderBox = document.querySelector('.slider__box');
const sliderImages = document.querySelectorAll('.slider__box img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = 687;

sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if (counter >= sliderImages.length - 1) {
    return;
  };
  sliderBox.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    return;
  };
  sliderBox.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

sliderBox.addEventListener('transitionend', () => {
  if (sliderImages[counter].id === 'lastClone') {
    sliderBox.style.transition = 'none';
    counter = sliderImages.length - 2;
    sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (sliderImages[counter].id === 'firstClone') {
    sliderBox.style.transition = 'none';
    counter = sliderImages.length - counter;
    sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
