'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-field');
const textarea = document.querySelector('.form-field--textarea');
const dropdownButton = document.querySelector('.dropdown__button');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });

  textarea.value = '';
});

const dropdownMenu = document.querySelector('.dropdown__content');

dropdownButton.addEventListener('click', e => {
  dropdownMenu.classList.toggle('dropdown__content--show');
});

const dropdownItems = document.querySelectorAll('.dropdown__item');

[...dropdownItems].forEach(item => {
  item.addEventListener('click', () => {
    dropdownMenu.classList.toggle('dropdown__content--show');
  });
});

const sliderButtons = document.querySelector('.slider__buttons');

sliderButtons.addEventListener('click', e => {
  const slider = document.querySelector('.slider__photo-container');
  const currentImage = document.querySelector('.slider__photo--visible');

  if (e.target.matches('.slider__button--next')) {
    if (currentImage.nextElementSibling) {
      currentImage.nextElementSibling.classList.add('slider__photo--visible');
    } else {
      slider.firstElementChild.classList.add('slider__photo--visible');
    }

    currentImage.classList.remove('slider__photo--visible');
  }

  if (e.target.matches('.slider__button--prev')) {
    if (currentImage.previousElementSibling) {
      currentImage.previousElementSibling.classList
        .add('slider__photo--visible');
    } else {
      slider.lastElementChild.classList.add('slider__photo--visible');
    }

    currentImage.classList.remove('slider__photo--visible');
  }
});
