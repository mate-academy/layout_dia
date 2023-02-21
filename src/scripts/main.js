'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#side-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

//
const form = document.querySelector('form');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);

//
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.slider__arrow--left');
const rightArrow = document.querySelector('.slider__arrow--right');

const images = [
  './images/slider/img-1.png',
  './images/slider/img-2.png',
  './images/slider/img-3.png',
  './images/slider/img-4.png',
];

let currentImageIndex = 0;

function changeImage(index) {
  slider.style.backgroundImage = `url('${images[index]}')`;

  const title = document.querySelector('.slider__title');
  const text = document.querySelector('.slider__text');

  if (index === 1 || index === 2 || index === 3) {
    title.style.color = '#2060f6';
    text.style.color = '#2060f6';
  } else {
    title.style.color = '';
    text.style.color = '';
  }
}

leftArrow.addEventListener('click', function() {
  currentImageIndex = (currentImageIndex === 0) ? images.length - 1
    : currentImageIndex - 1;
  changeImage(currentImageIndex);
});

rightArrow.addEventListener('click', function() {
  currentImageIndex = (currentImageIndex === images.length - 1) ? 0
    : currentImageIndex + 1;
  changeImage(currentImageIndex);
});

changeImage(currentImageIndex);
