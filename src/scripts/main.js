'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

let position = 0;
const sliderToShow = 1;
const sliderToScroll = 1;
const slider = document.querySelector('.slider');
const images = document.querySelector('.slider__images');
const photos = document.querySelectorAll('.slider__photo');
const btnLeft = document.querySelector('.button__arrow-left');
const btnRight = document.querySelector('.button__arrow-right');
const photoCount = photos.length;
const photoWidth = slider.clientWidth / sliderToShow;
const movePosition = sliderToScroll * photoWidth;

photos.forEach((photo) => {
  photo.style.minWidth = `${photoWidth}px`;
});

btnLeft.addEventListener('click', () => {
  const photoLeft
    = photoCount
      - (Math.abs(movePosition)
      + sliderToShow
      * photoWidth)
      / photoWidth;

  position
    += photoLeft >= sliderToScroll
      ? movePosition
      : photoLeft
      * photoWidth;

  setPosition();
  checkBtns();
});

btnRight.addEventListener('click', () => {
  const photoRight = Math.abs(movePosition) / photoWidth;

  position
    -= photoRight <= sliderToScroll
      ? movePosition
      : photoRight
      * photoWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  images.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnLeft.disabled = position === 0;
  btnRight.disabled = position <= -(photoCount - sliderToShow) * photoWidth;
};

checkBtns();
