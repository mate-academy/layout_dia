'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const header = document.querySelector('.header');
const menuNav = document.querySelector('.menu__nav');
const menuIcon = document.querySelector('.icon-menu');

const form = document.querySelector('.contact-form__form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(evt) {
  evt.preventDefault();
  form.reset();
};

header.addEventListener('click', menu, false);

function menu(evt) {
  if (evt.target.className === 'icon-menu'
      || evt.target.className === 'icon-menu icon-menu--active') {
    document.body.classList.toggle('page__body--with-menu');
    menuNav.classList.toggle('menu__nav--active');
    menuIcon.classList.toggle('icon-menu--active');
  }

  if (evt.target.tagName === 'A'
      || evt.target.tagName === 'IMG') {
    document.body.classList.remove('page__body--with-menu');
    menuNav.classList.remove('menu__nav--active');
    menuIcon.classList.remove('icon-menu--active');
  }
}

const slider = document.querySelector('.slider');
const slides = document.getElementsByClassName('slider__item');
let slideIndex = 1;

slider.addEventListener('click', buttonSlide, false);

function buttonSlide(evt) {
  if (evt.target.className === 'slider__button-left') {
    plusSlides(-1);
  }

  if (evt.target.className === 'slider__button-right') {
    plusSlides(1);
  }
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}
