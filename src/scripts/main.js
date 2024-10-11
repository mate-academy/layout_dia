'use strict';
let img = ['/slider-photo-1.eba8c588.png', '/slider-photo-2.9bbb1b4c.png', '/slider-photo-3.d777f5e4.png']
const sliderItem = document.querySelector('.slider__item')
const arrowPrev = document.querySelector('.slider__arrow-left');
const arrowNext = document.querySelector('.slider__arrow-right');
let num = 0;

//slider
function next() {
  num++;

  if (num >= img.length) {
    num = 0;
  }
  sliderItem.src = img[num];
}

function prev() {
  num--;

  if (num < 0) {
    num = img.length - 1;
  }

  sliderItem.src = img[num];
}

arrowPrev.addEventListener('click', () => {
  prev();
});

arrowNext.addEventListener('click', () => {
  next();
});

//
//burger-menu

const burgerBtn = document.querySelector('#burger');
const burgerClose = document.querySelector('.burger__close');
const burgerOpen = document.querySelector('.top-bar__open');
const burgerMenu = document.querySelector('.burger');
const topBarIcon = document.querySelector('.burger__logo');
const topBarHire = document.querySelector('.top-bar__hire');
const page = document.querySelector('.page__body');

burgerOpen.addEventListener('click', () => {
  burgerMenu.style.display = 'block';
  page.style.overflow = 'hidden';
});

burgerClose.addEventListener('click', () => {
  burgerMenu.style.display = 'none';
  page.style.overflow = 'auto';
});

burgerMenu.addEventListener('click', (event) => {
  if(event.target) {
    burgerMenu.style.display = 'none';
    topBarIcon.style.display = 'block';
    topBarHire.style.display = 'block';
    page.style.overflow = 'auto';
  }
});


//change theme
const switchers = document.querySelectorAll('.switcher')
//header

const header = document.querySelector('.header');
const headerButton = document.querySelector('.header__button');
const hire = document.querySelector('.top-bar__hire')

//services
const servicesButton = document.querySelectorAll('.services__button');
const servisesNumbers = document.querySelectorAll('.services__number');

//reviews
const persons = document.querySelectorAll('.reviews__img');
const icons = document.querySelectorAll('.reviews__icon');

//vision
const vision = document.querySelector('.vision');
const visionButton = document.querySelector('.vision__button');

//contactUs
const contactUs = document.querySelector('.contactUs');
const contactUsButton = document.querySelector('.contactUs__button');
const contactUsInputs = document.querySelectorAll('.contactUs__form_input')

//burger

const menus = document.querySelectorAll('.page__menu');
const footerPage = document.querySelector('.footer');


function toggleTheme() {
  header.classList.toggle('blue-theme');
  headerButton.classList.toggle('blue-theme');
  hire.classList.toggle('blue-theme');
  sliderItem.classList.toggle('blue-theme');
  burgerMenu.classList.toggle('blue-theme');

  servicesButton.forEach((button) => button.classList.toggle('blue-theme'));
  servisesNumbers.forEach((number) => number.classList.toggle('blue-theme'));
  persons.forEach((person) => person.classList.toggle('blue-theme'));
  icons.forEach((icon) => icon.classList.toggle('blue-theme'));
  vision.classList.toggle('blue-theme');
  visionButton.classList.toggle('blue-theme');
  contactUs.classList.toggle('blue-theme');
  contactUsButton.classList.toggle('blue-theme');
  contactUsInputs.forEach((input) => input.classList.toggle('blue-theme'));
  menus.forEach((menu) => menu.classList.toggle('blue-theme'));
  footerPage.classList.toggle('blue-theme');


  const isBlueTheme = header.classList.contains('blue-theme');
  localStorage.setItem('theme', isBlueTheme ? 'blue' : 'default');
}

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'blue') {
    toggleTheme();
  }
});


switchers.forEach((switcher) => {
  switcher.addEventListener('click', toggleTheme);
});
