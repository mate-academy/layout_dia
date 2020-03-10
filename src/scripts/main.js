'use strict';

const mobileBurger = document.querySelector('.nav__mobile-burger');
const headerInfo = document.querySelector('.header__info');
const navMobile = document.querySelector('.nav-mobile');
const slider = document.querySelector('.slider');
const sliderRight = document.querySelector('#btn-right');
const sliderLeft = document.querySelector('#btn-left');

mobileBurger.addEventListener('click', function() {
  mobileBurger.classList.toggle('nav__mobile-burger--active');
  headerInfo.classList.toggle('header__info--dis');
  navMobile.classList.toggle('nav-mobile--anim');
  navMobile.classList.toggle('nav-mobile--flex');
});

const slidersList = ['slider1', 'slider2', 'slider3'];
let count = 0;

sliderRight.addEventListener('click', function() {
  count++;

  if (count < slidersList.length) {
    slider.classList.toggle(slidersList[count]);
  } else {
    count = 0;
    slider.classList.remove(...slider.classList);
    slider.classList.add('slider');
    slider.classList.toggle(slidersList[count]);
  }
});

sliderLeft.addEventListener('click', function() {
  if (count === 0) {
    slider.classList.add(slidersList[slidersList.length - 2]);
    slider.classList.add(slidersList[slidersList.length - 1]);
    count = slidersList.length - 1;
  } else {
    slider.classList.remove(slidersList[count]);
    count--;
  }
});
