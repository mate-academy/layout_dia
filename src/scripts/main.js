'use strict';

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');

switcher.addEventListener('click', ( ) => {
  switcher.classList.toggle('theme-switcher--dark');

  if (page.classList.contains('page--theme--dark')) {
    page.classList.remove('page--theme--dark');

    switcher.classList.remove('theme-switcher--theme--dark');
  } else {
    page.classList.add('page--theme--dark');
    switcher.classList.add('theme-switcher--theme--dark');
  }
});

const visionBg = page.querySelector('.vision__content');
const comments = page.querySelectorAll('.testimonial-card__comment');
const fb = page.querySelector('.social--facebook');
const insta = page.querySelector('.social--instagram');
const tw = page.querySelector('.social--twitter');


switcher.addEventListener('click', ( ) => {
  page.classList.toggle('theme--dark');

  visionBg.classList.toggle('vision__content--theme--dark');

  comments.forEach(comment => {
    comment.classList.toggle('testimonial-card__comment--theme--dark');
  });

  fb.classList.toggle('social--facebook--theme--dark');
  insta.classList.toggle('social--instagram--theme--dark');
  tw.classList.toggle('social--twitter--theme--dark');
});

const leftButton = page.querySelector('.slider__arrow-left');
const rightButton = page.querySelector('.slider__arrow-right');
const sliderList = page.querySelector('.slider__list');
const sliderNumber = sliderList.children.length;
let currentSlide = 1;

const changeSlide = (step) => {
  currentSlide += step;

  if (currentSlide < 1) {
    currentSlide = sliderNumber;
  } else if (currentSlide > sliderNumber) {
    currentSlide = 1;
  }

  const shift = 100 / sliderNumber * (currentSlide - 1);

  sliderList.style.transform = `translateX(-${shift}%)`;
};

rightButton.addEventListener('click', () => {
  changeSlide(1);
});

leftButton.addEventListener('click', () => {
  changeSlide(-1);
});


const pageBody = document.querySelector('.page__body');
const menuButton = document.querySelector('.icon--menu');
const menu = document.querySelector('.header__nav');
const bgNav = document.querySelector('.nav--top');

const closeMenu = (event) => {
  if (
    event.target.className === 'nav__link'
    || event.target.className === 'nav-menu-close'
  ) {
    menu.classList.remove('header__nav--mobile-visible');
    pageBody.classList.remove('page__body--no-scroll');
    bgNav.classList.remove('nav--top-menu-open');

    menu.removeEventListener('click', closeMenu);
  }
};

const openMenu = () => {
  menu.classList.add('header__nav--mobile-visible');
  pageBody.classList.add('page__body--no-scroll');
  bgNav.classList.add('nav-menu-open');


  menu.addEventListener('click', closeMenu);
};

menuButton.addEventListener('click', openMenu);


const form = document.querySelector('.text-us__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
