'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#page__drop-menu') {
    document.body.classList.add('page__body--scroll');
  } else {
    document.body.classList.remove('page__body--scroll');
  }
});

function stopDefAction(event) {
  document.getElementById('contactForm').reset();
  event.preventDefault();
}

document.getElementById('contactForm').addEventListener(
  'submit', stopDefAction, false
);

// Slider
const bgArr = ['slider--1', 'slider--2', 'slider--3'];
let prevCount = 0;
let counter = 0;
const sliderTitle = ['Intro', 'Second', 'Third'];
const sliderText = [
  'By the same illusion which lifts the horizon.',
  'Some text description for the SECOND slide of slider.',
  'And the THIRD text desctiption for my own slider.',
];
const nextButton = document.querySelector('.slider__button--next');
const prevButton = document.querySelector('.slider__button--prev');

function changer() {
  const findSlider = document.querySelector('.slider');
  const findSliderTitle = document.querySelector('.slider__title');
  const findSliderText = document.querySelector('.slider__text');

  findSlider.classList.remove(bgArr[prevCount]);
  findSliderTitle.innerHTML = sliderTitle[counter];
  findSliderText.innerHTML = sliderText[counter];
  findSlider.classList.add(bgArr[counter]);
}

prevButton.addEventListener('click', () => {
  if (counter === 0) {
    counter = bgArr.length - 1;
  } else {
    counter--;
  }
  changer();
  prevCount = counter;
});

nextButton.addEventListener('click', () => {
  if (counter === bgArr.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  changer();
  prevCount = counter;
});
