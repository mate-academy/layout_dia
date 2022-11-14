'use strict';

const sliderImages = document.querySelectorAll('.header__slider-img');
const imageWidth = sliderImages[0].getBoundingClientRect().width;
const lowerThird = document.querySelector('.header__lower-third-container');
const sliderLeftBtn = document.querySelector('.header__slider-button--left');
const sliderRightBtn = document.querySelector('.header__slider-button--right');

// Slider
function getTranslateX(el) {
  const style = window.getComputedStyle(el);
  const matrix = new window.DOMMatrixReadOnly(style.transform);

  return matrix.m41;
};

sliderLeftBtn.addEventListener('click', () => {
  sliderImages.forEach((img, i) => {
    const translateX = getTranslateX(img);

    if (translateX === (2 * imageWidth)) {
      img.style.transform = `translateX(0)`;
    } else {
      img.style.transform = `translateX(${translateX + imageWidth}px)`;
    }
  });
});

sliderRightBtn.addEventListener('click', () => {
  sliderImages.forEach((img, i) => {
    const translateX = getTranslateX(img);

    if (translateX === -1 * (2 * imageWidth)) {
      img.style.transform = `translateX(0)`;
    } else {
      img.style.transform = `translateX(${translateX - imageWidth}px)`;
    }
  });
});

lowerThird.style.top = `${imageWidth - 135}px`;
