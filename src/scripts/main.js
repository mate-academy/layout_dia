'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', ev => {
  contactForm.reset();
  ev.preventDefault();
});

const slider = document.querySelector('.slider');
const sliderLeft = document.querySelector('.slider__button--left');
const sliderRight = document.querySelector('.slider__button--right');
let slideNumber = 1;

function changeSlide(direction) {
  slider.classList.remove(`slider--bckgrnd-${slideNumber}`);

  if (direction === 'l') {
    slideNumber === 1
      ? slideNumber = 4
      : slideNumber--;
  }

  if (direction === 'r') {
    slideNumber === 4
      ? slideNumber = 1
      : slideNumber++;
  }

  slider.classList.add(`slider--bckgrnd-${slideNumber}`);
}

sliderLeft.addEventListener('click', () => {
  changeSlide('l');
}
);

sliderRight.addEventListener('click', () => {
  changeSlide('r');
}
);
