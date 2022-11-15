'use strict';

// Open and close menu
const page = document.querySelector('.page');
const nav = document.querySelector('.nav');
const menuOpener = document.querySelector('.header__menu-opener');

menuOpener.addEventListener('click', () => {
  if (nav.classList.contains('nav--open')) {
    nav.classList.remove('nav--open');
    page.style.overflowY = 'visible';
  } else {
    nav.classList.add('nav--open');
    page.style.overflowY = 'hidden';
  }
});

// Slider
const sliderImages = document.querySelectorAll('.header__slider-item');
const imageWidth = sliderImages[0].getBoundingClientRect().width;
const imageHeight = sliderImages[0].getBoundingClientRect().height;
const sliderLeftBtn = document.querySelector('.header__slider-button--left');
const sliderRightBtn = document.querySelector('.header__slider-button--right');

// Get transform value
function getTranslateX(el) {
  const style = window.getComputedStyle(el);
  const matrix = new window.DOMMatrixReadOnly(style.transform);

  return matrix.m41;
};

const screenWidth = window.innerWidth;

// Left Slider Button Event
if (screenWidth < 1024) {
  sliderLeftBtn.addEventListener('click', () => {
    sliderImages.forEach((img) => {
      const translateX = getTranslateX(img);

      if (translateX === (2 * imageWidth)) {
        img.style.transform = `translateX(0)`;
      } else {
        img.style.transform = `translateX(${translateX + imageWidth}px)`;
      }
    });
  });
} else {
  sliderLeftBtn.addEventListener('click', () => {
    sliderImages.forEach((img) => {
      const translateX = getTranslateX(img);

      if (translateX === (2 * imageWidth)) {
        img.style.transform = `translateX(100%)`;
      } else {
        img.style.transform = `translateX(${translateX + imageWidth}px)`;
      }
    });
  });
}

// Right Slider Button Event
if (screenWidth < 1024) {
  sliderRightBtn.addEventListener('click', () => {
    sliderImages.forEach((img) => {
      const translateX = getTranslateX(img);

      if (translateX === -1 * (2 * imageWidth)) {
        img.style.transform = `translateX(0)`;
      } else {
        img.style.transform = `translateX(${translateX - imageWidth}px)`;
      }
    });
  });
} else {
  sliderRightBtn.addEventListener('click', () => {
    sliderImages.forEach((img) => {
      const translateX = getTranslateX(img);

      if (translateX === (2 * imageWidth)) {
        img.style.transform = `translateX(100%)`;
      } else {
        if (translateX - imageWidth <= 0) {
          img.style.transform = `translateX(${translateX + imageWidth}px)`;
        } else {
          img.style.transform = `translateX(${translateX - imageWidth}px)`;
        }
      }
    });
  });
}

const lowerThird = document.querySelector('.header__lower-third-container');

if (screenWidth < 1024) {
  lowerThird.style.top = `${(imageHeight * 0.6)}px`;
} else {
  lowerThird.style.top = `${(imageHeight * 0.75)}px`;
}
