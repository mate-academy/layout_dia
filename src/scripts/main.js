'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#side-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

const slider = document.querySelector('.slider');
const rightArrow = document.querySelector('.slider__button-right');
const leftArrow = document.querySelector('.slider__button-left');
let slideIndex = 1;
const indexCount = 3;

const chooseCurrentSlide = () => {
  const indexes = [...Array(indexCount + 1).keys()].slice(1);

  indexes.map(index => slider.classList.toggle(
    `slider--${index}`,
    slideIndex === index,
  ));
};

rightArrow.addEventListener('click', () => {
  if (slideIndex + 1 > indexCount) {
    return;
  }

  slideIndex++;
  chooseCurrentSlide();
});

leftArrow.addEventListener('click', () => {
  if (slideIndex - 1 < 1) {
    return;
  }

  slideIndex--;
  chooseCurrentSlide();
});
