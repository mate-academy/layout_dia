'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const btnLeft = document.querySelector('.slider__button--left');
const btnRight = document.querySelector('.slider__button--right');
const slide = document.querySelector('.slider__line');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

let translateX = 0;

btnRight.onclick = () => {
  if (translateX === 66.66) {
    translateX = 0;
    slide.style.transform = `translateX(-${translateX}%)`;
  } else {
    translateX = translateX + 33.33;
    slide.style.transform = `translateX(-${translateX}%)`;
  }
};

btnLeft.onclick = () => {
  if (translateX === 0) {
    translateX = 66.66;
    slide.style.transform = `translateX(-${translateX}%)`;
  } else {
    translateX = translateX - 33.33;
    slide.style.transform = `translateX(-${translateX}%)`;
  }
};
