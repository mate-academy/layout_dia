'use strict';

let position = 0;
const slidesToScroll = 1;
const prevArrow = document.querySelector('.slider__container-arrows-prev');
const nextArrow = document.querySelector('.slider__container-arrows-next');
const list = document.querySelector('.slider__gallery-list');
const itemWidth = 320;
const movePosition = slidesToScroll * itemWidth;

prevArrow.addEventListener('click', () => {
  if (position === 0) {
    return;
  }

  position += movePosition;
  list.style.transform = `translateX(${position}px)`;
});

nextArrow.addEventListener('click', () => {
  if (position <= -320) {
    return;
  }

  position -= movePosition;
  list.style.transform = `translateX(${position}px)`;
});
