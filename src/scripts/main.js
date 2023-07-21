'use strict';

// animation on scroll

function onScrollAnimation() {
  const animated = document.querySelectorAll('.animated');

  for (let i = 0; i < animated.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = animated[i].getBoundingClientRect().top;
    const elementVisible = 180;

    if (elementTop < windowHeight - elementVisible) {
      animated[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', e => onScrollAnimation());

// slider

let count = 0;
let width;
let timer;
const sliderImages = document.querySelectorAll('.slider__image');
const sliderContainer = document.querySelector('.slider__container');

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderContainer.style.width = width * sliderImages.length + 'px';

  sliderImages.forEach(item => {
    item.style.width = width + 'px';
  });
  rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.icon--arrow--right')
  .addEventListener('click', function() {
    clearTimeout(timer);
    count++;

    if (count >= sliderImages.length) {
      count = 0;
    }
    rollSlider();
    setTimeout(autoSlider, 1500);
  });

document.querySelector('.icon--arrow--left')
  .addEventListener('click', function() {
    clearTimeout(timer);
    count--;

    if (count < 0) {
      count = sliderImages.length - 1;
    }
    rollSlider();
    setTimeout(autoSlider, 1500);
  });

function rollSlider() {
  sliderContainer.style.transform = 'translate(-' + count * width + 'px)';
}

function autoSlider() {
  timer = setTimeout(function() {
    count++;

    if (count >= sliderImages.length) {
      count = 0;
    }
    rollSlider();
    autoSlider();
  }, 2000);
}

autoSlider();
