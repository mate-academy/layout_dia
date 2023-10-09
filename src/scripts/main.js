'use strict';

document.getElementById('sendMessage').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
});

const showMenu = document.getElementById('show-menu');
const navList = document.getElementById('nav-list');

document.addEventListener('click', (event) => {
  if (event.target === showMenu) {
    showMenu.addEventListener('click', () => {
      navList.style.right = 0;
    });
  } else {
    navList.style.right = '100vw';
  }
});

const goLeft = document.getElementById('go-left');
const goRight = document.getElementById('go-right');
const sliderImage = document.getElementById('slider-image');

const slides = ['slider-1', 'slider-2', 'slider-3'];
let currentIndex = 0;

goLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;

  const currentSlide = slides[currentIndex];

  sliderImage.style.backgroundImage
    = `url(../images/slider/${currentSlide}.jpg)`;
});

goRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;

  const currentSlide = slides[currentIndex];

  sliderImage.style.backgroundImage
    = `url(../images/slider/${currentSlide}.jpg)`;
});
