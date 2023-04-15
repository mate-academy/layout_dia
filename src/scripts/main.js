'use strict';

document.querySelector('.header-logo')
  .addEventListener('click', function(event) {
    event.preventDefault(); // цей рядок запобігає перезавантаженню сторінки
    window.location.href = './index.html'; // змінюємо URL на адресу головн стор
  });

// BURGER-MENU

const burger = document.querySelector('.header-burger');
const burgerFirstLine = document.querySelector('.firstLine');
const burgerSecondLine = document.querySelector('.secondLine');
const nav = document.querySelector('.header-nav');
const navLink = document.querySelectorAll('.pop-up');

burger.addEventListener('click', () => {
  burgerFirstLine.classList.toggle('rotate-down');
  burgerSecondLine.classList.toggle('rotate-up');
  nav.classList.toggle('active-nav');
});

[...navLink].forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active-nav');
    burgerFirstLine.classList.remove('rotate-down');
    burgerSecondLine.classList.remove('rotate-up');
  });
});

// SLIDER

const slider = document.querySelector('.slider__window');
const leftBtn = document.querySelector('.button-left');
const rightBtn = document.querySelector('.button-right');
const arrOfPhoto
// eslint-disable-next-line max-len
= ['https://raw.githubusercontent.com/iamloren/layout_dia/master/src/images/slider/slide-1.jpg',
  // eslint-disable-next-line max-len
  'https://raw.githubusercontent.com/iamloren/layout_dia/master/src/images/slider/slide-2.jpg',
  // eslint-disable-next-line max-len
  'https://raw.githubusercontent.com/iamloren/layout_dia/master/src/images/slider/slide-3.jpg'];
let clickNumber = 0;

rightBtn.addEventListener('click', nextPhoto);
leftBtn.addEventListener('click', prevPhoto);

function nextPhoto() {
  clickNumber++;

  if (clickNumber >= arrOfPhoto.length) {
    clickNumber = 0;
    slider.setAttribute('src', `${arrOfPhoto[clickNumber]}`);
  } else {
    slider.setAttribute('src', `${arrOfPhoto[clickNumber]}`);
  }
}

function prevPhoto() {
  clickNumber--;

  if (clickNumber < 0) {
    clickNumber = arrOfPhoto.length - 1;
    slider.setAttribute('src', `${arrOfPhoto[clickNumber]}`);
  } else {
    slider.setAttribute('src', `${arrOfPhoto[clickNumber]}`);
  }
};
