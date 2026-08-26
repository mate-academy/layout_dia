'use strict';

const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('ul');
const slides = slider.querySelectorAll('li');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let current = 0;

function updateSlider() {
  const slideWidth = slider.clientWidth;

  sliderList.style.transform = `translateX(-${current * slideWidth}px)`;
}

function setCurrent(direction) {
  if (direction === 'next') {
    current++;

    if (current >= slides.length) {
      current = 0;
    }
  } else {
    current--;

    if (current < 0) {
      current = slides.length - 1;
    }
  }

  updateSlider();
}

nextButton.addEventListener('click', () => {
  setCurrent('next');
});

prevButton.addEventListener('click', () => {
  setCurrent('prev');
});

window.addEventListener('resize', updateSlider);


// FORM

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
