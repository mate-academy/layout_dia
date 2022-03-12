'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#drop-menu') {
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

function changer() {
  const findSlider = document.getElementById('slider');
  const findSliderTitle = document.getElementsByClassName('slider__title')[0];
  const findSliderText = document.getElementsByClassName('slider__text')[0];

  findSlider.classList.remove(bgArr[prevCount]);
  findSliderTitle.innerHTML = sliderTitle[counter];
  findSliderText.innerHTML = sliderText[counter];
  findSlider.classList.add(bgArr[counter]);
}

document.getElementById('prevSlide').onclick = function bgNext() {
  if (counter === 0) {
    counter = bgArr.length - 1;
  } else {
    counter--;
  }
  changer();
  prevCount = counter;
};

document.getElementById('nextSlide').onclick = function bgNext() {
  if (counter === bgArr.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  changer();
  prevCount = counter;
};
