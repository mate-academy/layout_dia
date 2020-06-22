'use strict';

let clickCount = 1;
const backgroundImg = [
  '../images/slider/Photo.jpg',
  '../images/slider/Photo1.jpg',
  '../images/slider/Photo2.jpg',
  '../images/slider/Photo3.jpg',
  '../images/slider/Photo4.jpg',
];

const rightArrow = document.querySelector('.slider__arrow--right');
const leftArrow = document.querySelector('.slider__arrow--left');
const slider = document.querySelector('.header__slider');

rightArrow.addEventListener('click', function() {
  if (clickCount + 1 > backgroundImg.length - 1) {
    clickCount = 0;
    slider.style.backgroundImage = 'url(' + backgroundImg[clickCount] + ')';
  } else {
    clickCount++;
    slider.style.backgroundImage = 'url(' + backgroundImg[clickCount] + ')';
  }
});

leftArrow.addEventListener('click', function() {
  if (clickCount - 1 < 0) {
    clickCount = backgroundImg.length - 1;
    slider.style.backgroundImage = 'url(' + backgroundImg[clickCount] + ')';
  } else {
    clickCount--;
    slider.style.backgroundImage = 'url(' + backgroundImg[clickCount] + ')';
  }
});
