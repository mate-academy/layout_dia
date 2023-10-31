'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contacts__send-us_form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

const buttonPrev = document.querySelector('#carusel_button_prev');
const buttonNext = document.querySelector('#carusel_button_next');
const imagesList = document.querySelector('#images');

let imgIndex = 0;
const imgClasses = [
  'img-first', 'img-second', 'img-third', 'img-fourth',
];

const handlerClickPrev = () => {
  if (imagesList) {
    const currentClass = imgClasses[imgIndex];

    imgIndex = imgIndex !== 0 ? imgIndex - 1 : imgClasses.length - 1;

    const futureClass = imgClasses[imgIndex];

    imagesList.classList.remove(currentClass);
    imagesList.classList.add(futureClass);
  }
};

const handlerClickNext = () => {
  if (imagesList) {
    const currentClass = imgClasses[imgIndex];

    imgIndex = imgIndex !== imgClasses.length - 1 ? imgIndex + 1 : 0;

    const futureClass = imgClasses[imgIndex];

    imagesList.classList.remove(currentClass);
    imagesList.classList.add(futureClass);
  }
};

buttonPrev.addEventListener('click', handlerClickPrev);
buttonNext.addEventListener('click', handlerClickNext);
