'use strict';

// rotate all rectangles
const buttonSlogan = document.querySelector('.slogan__button');
const rectangles = document.querySelectorAll('.rectangle');

function rotateRectangles() {
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].classList.toggle('rectangle--is-active');
  }
}

buttonSlogan.onmouseover = rotateRectangles;

buttonSlogan.addEventListener('onmouseover', (e) => {
  if (e.target === buttonSlogan) {
    rotateRectangles();
  }
});

// toggle menu
const burger = document.querySelector('.header__toggle--toggler');
const closeMenu = document.querySelector('.nav__toggle--close');
const menu = document.querySelector('.nav');

burger.onclick = classToggle;

function classToggle() {
  menu.classList.toggle('nav--is-active');
};

menu.addEventListener('click', function(e) {
  if (e.target === closeMenu
    || e.target.classList.contains('nav__link')) {
    classToggle();
  }
});

// slider

const slides = document.querySelectorAll('.slider__picture');
const previousSlide = document.querySelector('.slider__btn--previous');
const nextSlide = document.querySelector('.slider__btn--next');

nextSlide.onclick = nextPicture;
previousSlide.onclick = nextPicture;

let currentSlide = 0;

function nextPicture() {
  ++currentSlide;

  if (currentSlide >= slides.length) {
    slides[currentSlide - 1].classList.remove('slider__picture--is-active');
    currentSlide = 0;
    slides[currentSlide].classList.add('slider__picture--is-active');
  } else {
    slides[currentSlide - 1].classList.remove('slider__picture--is-active');
    slides[currentSlide].classList.add('slider__picture--is-active');
  }
}

nextSlide.addEventListener('click', function(e) {
  if (e.target === nextSlide) {
    nextPicture();
  }
});

setInterval(nextPicture, 7000);
