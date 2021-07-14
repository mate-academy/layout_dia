'use strict';

const toggler = document.querySelector('.nav__toggler');
const list = document.querySelector('.nav__list');

toggler.addEventListener('click', () => {
  if (list.classList.contains('nav__list--visible')) {
    setTimeout(() => {
      list.classList.toggle('nav__list--visible');
    }, 500);
  } else {
    list.classList.toggle('nav__list--visible');
  }

  if (toggler.classList.contains('nav__toggler--is-active')) {
    toggler.classList.toggle('nav__toggler--is-active');
    toggler.classList.add('nav__toggler--unactive');

    setTimeout(() => {
      toggler.classList.remove('nav__toggler--unactive');
    }, 500);
  } else {
    toggler.classList.toggle('nav__toggler--is-active');
  }

  if (list.classList.contains('nav__list--is-active')) {
    list.classList.toggle('nav__list--is-active');
  } else {
    setTimeout(() => {
      list.classList.toggle('nav__list--is-active');
    }, 20);
  }
});

const sliderLine = document.querySelector('.slider__line');
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');
let position = 'first';

buttonNext.addEventListener('click', () => {
  if (position !== 'second') {
    sliderLine.classList.add('slider__line--switched');
    position = 'second';
  }
});

buttonPrev.addEventListener('click', () => {
  if (position !== 'first') {
    sliderLine.classList.remove('slider__line--switched');
    position = 'first';
  }
});

const formButton = document.querySelector('.footer__button');
const inputs = document.querySelectorAll('.footer__input');

formButton.addEventListener('click', () => {
  inputs.forEach((input) => {
    input.value = '';
  });
});
