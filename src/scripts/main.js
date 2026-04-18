'use strict';
const sliderBg = document.querySelector('.header__slider-bg');
const btnPrev = document.querySelector('.circle-arrow--prev');
const btnNext = document.querySelector('.circle-arrow--next');

const images = [
  "./images/slider/header-photo/header-photo.jpg",
  "./images/slider/header-photo/header-photo-2.jpg",
  "./images/slider/header-photo/header-photo-3.jpg"
];

let current = 0;

// показ картинки
function updateSlider() {
  sliderBg.style.backgroundImage =
    `url(${images[current]})`;
}

// вперед
btnNext.addEventListener('click', () => {
  current = (current + 1) % images.length;
  updateSlider();
});

// назад
btnPrev.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  updateSlider();
});
