'use strict';
// #region slider
const slider = {
  sliderClassNames: [
    'photo--0',
    'photo--1',
    'photo--2',
  ],

  titleSlider: [
    'New world',
    'Road trip',
    'New community',
  ],

  sliderText: [
    'By the same illusion which lifts the <br>horizon',
    'If the same illusion which lifts the <br>lorem',
    'Excepteur sint occaecat cupidatat non <br>proident',
  ],
};

const slideTitle = document.querySelector('.slider__intro');
const sliderText = document.querySelector('.slider__description');
const sliderImage = document.querySelector('.slider__photo-img');
const slide = document.querySelector('.slider__photo');
let currentIndex = 0;
let isTransitioning = false;

sliderImage.classList.toggle(`${slider.sliderClassNames[currentIndex]}`);
slideTitle.innerHTML = `${slider.titleSlider[currentIndex]}`;
sliderText.innerHTML = `${slider.sliderText[currentIndex]}`;

function changeSlide(direction) {
  if (isTransitioning) return;
  isTransitioning = true;

  if (direction === 'next') {
    sliderImage.classList.remove(`${slider.sliderClassNames[currentIndex]}`);
    currentIndex = (currentIndex + 1) % slider.sliderClassNames.length;
    sliderImage.classList.add(`${slider.sliderClassNames[currentIndex]}`);
  } else {
    sliderImage.classList.remove(`${slider.sliderClassNames[currentIndex]}`);
    currentIndex = (currentIndex - 1 + slider.sliderClassNames.length) % slider.sliderClassNames.length;
    sliderImage.classList.add(`${slider.sliderClassNames[currentIndex]}`);
  }

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
const hireLink = document.querySelectorAll('.nav__action-link');


for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', () => {
    asideMenu.classList.remove('active');
    page.classList.remove('active');
  });
}
for (let i = 0; i < hireLink.length; i++) {
  hireLink[i].addEventListener('click', () => {
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
