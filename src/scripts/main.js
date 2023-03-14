'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__menu--stop-scrolling');
  } else {
    document.body.classList.remove('page__menu--stop-scrolling');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

const sliderLine = document.querySelector('.slider-line');
const images = [...sliderLine.children];
const sliderBlock = document.querySelector('.header__slider-block');
const prevButton = document.querySelector('.slider-nav__arrow--left');
const nextButton = document.querySelector('.slider-nav__arrow--right');
let count = 0;
let width;

images.forEach(img => {
  img.style.objectFit = 'cover';
});

function init() {
  width = sliderBlock.offsetWidth;
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

nextButton.addEventListener('click', (e) => {
  e.preventDefault();
  count++;

  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

prevButton.addEventListener('click', (e) => {
  e.preventDefault();
  count--;

  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = `translate(-${count * width}px)`;
}
