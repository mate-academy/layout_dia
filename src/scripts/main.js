'use strict';
// #region slider
const slider = {
  sliderImages: [
    'https://w.wallhaven.cc/full/zy/wallhaven-zyzj1w.jpg',
    'https://w.wallhaven.cc/full/j8/wallhaven-j8g2vw.jpg',
    'https://w.wallhaven.cc/full/57/wallhaven-57y839.jpg',
  ],

  titleSlider: [
    'Old computer',
    'Book',
    'Time',
  ],

  sliderText: [
    'By the same illusion which lifts the <br>horizon',
    'If the same illusion which lifts the <br>lorem',
    'Excepteur sint occaecat cupidatat non <br>proident',
  ],
};

const slideTitle = document.querySelector('.slider__intro');
const sliderText = document.querySelector('.slider__description');
const slide = document.querySelector('.slider__photo');
const sliderImage = document.createElement('img');

let currentIndex = 0;
let isTransitioning = false;

sliderImage.src = `${slider.sliderImages[currentIndex]}`;
sliderImage.alt = `${slider.titleSlider[currentIndex]}`;
sliderImage.classList.add('slider__photo-img');
slide.appendChild(sliderImage);
slideTitle.innerHTML = `${slider.titleSlider[currentIndex]}`;
sliderText.innerHTML = `${slider.sliderText[currentIndex]}`;

function changeSlide(direction) {
  if (isTransitioning) return;
  isTransitioning = true;

  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % slider.sliderImages.length;
  } else {
    currentIndex = (currentIndex - 1 + slider.sliderImages.length) % slider.sliderImages.length;
  }

  sliderImage.src = `${slider.sliderImages[currentIndex]}`;
  sliderImage.alt = `${slider.titleSlider[currentIndex]}`;
  slideTitle.innerHTML = `${slider.titleSlider[currentIndex]}`;
  sliderText.innerHTML = `${slider.sliderText[currentIndex]}`;

  isTransitioning = false;
}

document.querySelector('.slider__btn--next').addEventListener('click', function() {
  changeSlide('next');
});

document.querySelector('.slider__btn--prev').addEventListener('click', function() {
  changeSlide('prev');
});
// #endregion

// #region menu
const iconMenu = document.querySelectorAll('.nav__logo-menu');
const asideMenu = document.querySelector('.page__menu');
const menuLink = document.querySelectorAll('.page__list-link');
const page = document.querySelector('.page');

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', () => {
    asideMenu.classList.remove('active');
    page.classList.remove('active');
  });
}

iconMenu[0].classList.add('burger');
iconMenu[0].addEventListener('click', () => {
  page.classList.add('active');
  asideMenu.classList.add('active');
  iconMenu[0].classList.remove('burger');
  iconMenu[1].classList.add('close');

  iconMenu[1].addEventListener('click', () => {
    page.classList.remove('active');
    asideMenu.classList.remove('active');
    iconMenu[1].classList.remove('close');
    iconMenu[0].classList.add('burger');
  });
});

// #endregion

