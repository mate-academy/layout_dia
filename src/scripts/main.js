'use strict';

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

// || e.target.classList.contains('nav-toggle__link')
