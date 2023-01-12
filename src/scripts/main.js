'use strict';
/* Button Form */

const form = document.querySelector('.form');

form.addEventListener('submit', onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  event.target.reset();
};

/* Menu */

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

/* Slider */

const images = document.getElementsByClassName('slider__image');

const imagesCount = images.length;

const nextImage = document.querySelector('.slider__button--next');
const previousImage = document.querySelector('.slider__button--prev');

let count = 0;

function showNextImage() {
  images[count].classList.remove('slider__image--active');

  if (count < imagesCount - 1) {
    count++;
  } else {
    count = 0;
  }

  images[count].classList.add('slider__image--active');
}

function showPreviousImage() {
  images[count].classList.remove('slider__image--active');

  if (count > 0) {
    count--;
  } else {
    count = imagesCount - 1;
  }

  images[count].classList.add('slider__image--active');
}

function keyPressControl(e) {
  // eslint-disable-next-line no-param-reassign
  e = e || window.event;

  // eslint-disable-next-line eqeqeq
  if (e.keyCode == '37') {
    showPreviousImage();
  // eslint-disable-next-line eqeqeq
  } else if (e.keyCode == '39') {
    showNextImage();
  }
}

nextImage.addEventListener('click', showNextImage);
previousImage.addEventListener('click', showPreviousImage);
document.addEventListener('keydown', keyPressControl);
