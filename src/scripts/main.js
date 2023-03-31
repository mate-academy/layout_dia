'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const photos = document.querySelectorAll('.slider .slider__images .slider__image');
const sliderLine = document.querySelector('.slider .slider__images');
let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * photos.length + 'px';

  photos.forEach(item => {
    item.style.width = width + 'px';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__button--right').addEventListener('click', function() {
  count++;

  if (count >= photos.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector('.slider__button--left').addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = photos.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
