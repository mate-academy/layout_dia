'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.slider__content').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
});

next.addEventListener('click', () => {
  nextImage('prev');
});

function nextImage(direction) {
  if (direction === 'next') {
    index++;

    if (index === totalImages) {
      index = 0;
    }
  } else {
    if (index === 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('slider__slide--active');
  }
  images[index].classList.add('slider__slide--active');
}
