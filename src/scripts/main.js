'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menuNav') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

const buttonL = document.querySelector('.slider__button--left');
const buttonR = document.querySelector('.slider__button--right');

function slideShow() {
  const slider = document.querySelector('.slider');

  slider.classList.toggle('slider-one')
    || slider.classList.toggle('slider-two');
}

buttonL.addEventListener('click', slideShow);
buttonR.addEventListener('click', slideShow);

document.addEventListener('DOMContentLoaded', () => {
  setInterval(slideShow, 1500);
});
