'use strict';

const menuButton = document.querySelector('.top-bar__icon-menu');

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('top-bar__icon-menu--close')) {
    menuButton.classList.remove('top-bar__icon-menu--close');
    menuButton.setAttribute('href', '#home');
  } else {
    menuButton.classList.add('top-bar__icon-menu--close');
    menuButton.setAttribute('href', '#menu');
  }
});

const navButtons = document.querySelectorAll('.nav__link');
const hireButton = document.querySelector('.top-bar__button-hire-us');
const logoButton = document.querySelector('.top-bar__logo');

navButtons.forEach(button => button.addEventListener('click', switchMenuIcon));
hireButton.addEventListener('click', switchMenuIcon);
logoButton.addEventListener('click', switchMenuIcon);

function switchMenuIcon() {
  if (menuButton.classList.contains('top-bar__icon-menu--close')) {
    menuButton.classList.remove('top-bar__icon-menu--close');
    menuButton.setAttribute('href', '#home');
  }
}

const sliderButton = document.querySelectorAll('.slider__button');
const sliderHolder = document.querySelector('.slider__holder');

let index = 0;

sliderButton[0].addEventListener('click', () => {
  if (index !== 0) {
    index--;
    sliderHolder.style.transform = `translateX(-${index * 100}%)`;
  }

  if (index === 0) {
    sliderButton[0].classList.add('slider__button--disable');
  }

  if (index === 2) {
    sliderButton[1].classList.remove('slider__button--disable');
  }
});

sliderButton[1].addEventListener('click', () => {
  if (index !== 3) {
    index++;
    sliderHolder.style.transform = `translateX(-${index * 100}%)`;
  }

  if (index === 3) {
    sliderButton[1].classList.add('slider__button--disable');
  }

  if (index === 1) {
    sliderButton[0].classList.remove('slider__button--disable');
  }
});
