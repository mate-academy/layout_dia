'use strict';

const menu = document.getElementById('menu-mobile');
const button = document.getElementById('burger-button');
const images = document.querySelectorAll('.slider__image');
const slider = new Slider(images);

button.onclick = function() {
  menu.classList.toggle('header__top--open');
};

document.getElementById('slider-left').onclick = function() {
  slider.prev();
};

document.getElementById('slider-right').onclick = function() {
  slider.next();
};

// eslint-disable-next-line no-shadow
function Slider(images) {
  this.images = images;

  let i = 0;

  this.prev = function() {
    this.images[i].classList.remove('slider__image--showed');
    i--;

    if (i < 0) {
      i = this.images.length - 1;
    }

    this.images[i].classList.add('slider__image--showed');
  };

  this.next = function() {
    this.images[i].classList.remove('slider__image--showed');
    i++;

    if (i >= this.images.length) {
      i = 0;
    }

    this.images[i].classList.add('slider__image--showed');
  };
}
