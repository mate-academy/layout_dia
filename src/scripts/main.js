'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const prev = document.getElementsByClassName('prev')[0];
const next = document.getElementsByClassName('next')[0];
const sliders = document.getElementsByClassName('move__slider');

let countSlide = 0;

prev.addEventListener('click', () => {
  if (countSlide === 0) {
    countSlide = sliders.length;
  }
  countSlide -= 1;

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'none';
  }

  sliders[countSlide].style.display = 'block';
});

next.addEventListener('click', () => {
  if (countSlide === sliders.length - 1) {
    countSlide = -1;
  }

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'none';
  }
  countSlide += 1;
  sliders[countSlide].style.display = 'block';
});

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
