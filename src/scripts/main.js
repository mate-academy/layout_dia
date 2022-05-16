'use strict';

const SLIDER_PICTURES
  = [
    'slider--1',
    'slider--2',
    'slider--3',
  ];

let pictureId = 0;
const slideLeft = document.querySelector('#slider-left');
const slideRight = document.querySelector('#slider-right');
const sliderPicture = document.querySelector('.slider');

slideLeft.addEventListener('click', e => {
  sliderPicture.classList.remove(SLIDER_PICTURES[pictureId]);

  if (pictureId === 0) {
    pictureId = SLIDER_PICTURES.length - 1;
  } else {
    pictureId -= 1;
  };

  sliderPicture.classList.add(SLIDER_PICTURES[pictureId]);
});

slideRight.addEventListener('click', e => {
  sliderPicture.classList.remove(SLIDER_PICTURES[pictureId]);

  if (pictureId === SLIDER_PICTURES.length - 1) {
    pictureId = 0;
  } else {
    pictureId += 1;
  };

  sliderPicture.classList.add(SLIDER_PICTURES[pictureId]);
});
