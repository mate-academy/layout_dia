'use strict';

const sliderItem = document.querySelectorAll('.slider__item');
const sliderList = document.querySelector('.slider__list');
const form = document.querySelector('contact-us__form');
const menu = document.querySelector('.burger-menu');
const slider = document.querySelector('.slider');
const body = document.querySelector('body');
const arrows = document.getElementById('arrows');
const nav = document.getElementById('nav-menu');
let sliderWidth;
let count = 0;

window.onload = init();

function init() {
  sliderWidth = slider.offsetWidth;
  sliderList.style.width = sliderWidth * sliderItem.length + 'px';

  sliderItem.forEach(el => {
    el.style.width = sliderWidth;
  });

  moveSlider();
}

arrows.addEventListener('click', clickButtonSlider);

function clickButtonSlider(event) {
  if (event.target.classList.contains('slider__button--left')) {
    count--;

    if (count < 0) {
      count = sliderItem.length - 1;
    }

    moveSlider();
  } else {
    count++;

    if (count >= sliderItem.length) {
      count = 0;
    }

    moveSlider();
  }
};

function moveSlider() {
  sliderList.style.transform = 'translate(-' + count * sliderWidth + 'px)';
}

window.addEventListener('resize', init);

window.addEventListener('hashchange', () => {
  init();

  if (body.offsetWidth <= 1023) {
    if (window.location.hash === '#menu') {
      menu.classList.add('burger-menu--cross');
      nav.style.transform = 'translateX(0%)';
    } else {
      menu.classList.remove('burger-menu--cross');
      nav.style.transform = 'translateX(-100%)';
      body.style.overflow = '';
    }
  }
});

menu.addEventListener('click', (evnt) => {
  if (evnt.target.classList.contains('burger-menu--cross')) {
    menu.classList.remove('burger-menu--cross');
    nav.style.transform = 'translateX(-100%)';
    body.style.overflow = '';
  } else {
    menu.classList.add('burger-menu--cross');
    nav.style.transform = 'translateX(0%)';
    body.style.overflow = 'hidden';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
