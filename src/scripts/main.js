'use strict';

const menuOpen = document.querySelector('.header__menu-open');
const pageBody = document.querySelector('.page__body');
const headerNav = document.querySelector('.header__nav');
const headerHireUs = document.querySelector('.header__hire-us');

if (menuOpen) {
  menuOpen.addEventListener('click', () => {
    menuOpen.classList.toggle('_active');
    headerNav.classList.toggle('_active');
    pageBody.classList.toggle('_lock');
  });

  headerNav.addEventListener('click', () => {
    menuOpen.classList.remove('_active');
    headerNav.classList.remove('_active');
    pageBody.classList.remove('_lock');
  });

  headerHireUs.addEventListener('click', () => {
    menuOpen.classList.remove('_active');
    headerNav.classList.remove('_active');
    pageBody.classList.remove('_lock');
  });
}

const images = document.querySelectorAll(
  '.slider .slider__slides .slider__img'
);
const sliderSlides = document.querySelector('.slider__slides');
const arrowPrev = document.querySelector('.arrow--prev');
const arrowNext = document.querySelector('.arrow--next');
let width;
let count = 0;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderSlides.style.width = width * images.length + 'px';

  images.forEach((item) => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  scrollSlider();
}

init();
window.addEventListener('resize', init);

arrowPrev.addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = 0;
  }
  scrollSlider();
});

arrowNext.addEventListener('click', function() {
  count++;

  if (count >= images.length) {
    count = images.length - 1;
  }
  scrollSlider();
});

function scrollSlider() {
  sliderSlides.style.transform = 'translate(-' + count * width + 'px)';
}
