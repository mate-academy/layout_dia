'use strict';

let offset = 0;
const sliderLine = document.querySelector('.slider__line');
const sliderButtonRight = document.querySelector('.slider__button-right');
const sliderButtonLeft = document.querySelector('.slider__button-left');

// Click event for the right button
sliderButtonRight.addEventListener('click', function() {
  offset = offset + 33.333333;

  // Check if offset exceeds the maximum value
  if (offset > 66.6666666) {
    offset = 0;
  }
  sliderLine.style.transform = 'translateX(-' + offset + '%)';
});

// Click event for the left button
sliderButtonLeft.addEventListener('click', function() {
  offset = offset - 33.333333;

  // Check if offset becomes negative
  if (offset < 0) {
    offset = 66.6666666;
  }
  sliderLine.style.transform = 'translateX(-' + offset + '%)';
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
