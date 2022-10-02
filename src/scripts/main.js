'use strict';

const togling = document.querySelectorAll('.header__burger');

if (togling) {
  const menuItems = document.querySelector('.header');
  const menuLink = document
    .querySelectorAll('.menu__item');

  for (const tog of togling) {
    tog.addEventListener('click',
      (e) => menuItems.classList.toggle('header--active'));
  }

  for (const link of menuLink) {
    link.addEventListener('click',
      (e) => menuItems.classList.toggle('header--active'));
  }
}

let sliderPosition = 0;

const countSliders = document
  .querySelectorAll('.slider__img').length - 1;

const arLeft = document.querySelector('.slider__arrow--left');
const arRight = document.querySelector('.slider__arrow--right');

arRight.addEventListener('click', function() {
  sliderPosition += 100;

  if (sliderPosition > 100 * countSliders) {
    sliderPosition = 0;
  }

  document.querySelector('.slider__line').style.left = -sliderPosition + '%';
});

arLeft.addEventListener('click', function() {
  sliderPosition -= 100;

  if (sliderPosition < 0) {
    sliderPosition = 100 * countSliders;
  }

  document.querySelector('.slider__line').style.left = -sliderPosition + '%';
});

const makeDefault = document.querySelector('.form');

makeDefault.addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('message')[0].value = '';
});

const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function() {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + 'px';
  }
});
