'use strict';

let currentOffset = 0;
const sliderLine = document.querySelector('.slider__line');
const buttonRight = document.querySelector('.slider__button-right');
const buttonLeft = document.querySelector('.slider__button-left');

const slideWidthPercentage = 100 / 3; // Width of each slide in percentage

// Click event handler for the "Right" button
buttonRight.addEventListener('click', function() {
  currentOffset += slideWidthPercentage;

  // Check if the current offset exceeds the maximum value
  const maxOffset = slideWidthPercentage * 2;

  if (currentOffset > maxOffset) {
    currentOffset = 0;
  }
  sliderLine.style.transform = `translateX(-${currentOffset}%)`;
});

// Click event handler for the "Left" button
buttonLeft.addEventListener('click', function() {
  currentOffset -= slideWidthPercentage;

  // Check if the current offset becomes negative
  if (currentOffset < 0) {
    currentOffset = slideWidthPercentage * 2;
  }
  sliderLine.style.transform = `translateX(-${currentOffset}%)`;
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
