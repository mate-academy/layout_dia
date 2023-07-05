'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const prevButton = document.querySelector('.slider__button--left');
const nextButton = document.querySelector('.slider__button--right');
let slideIndex = 0;

showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slider__image');

  if (n > slides.length - 1) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

prevButton.addEventListener('click', () => plusSlide(-1));
nextButton.addEventListener('click', () => plusSlide(1));

const form = document.querySelector('.contact__form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  this.reset();
}

const toggler = document.querySelector('.header__button-theme');
const theme = document.querySelector('.icon--theme');
const bgColor = document.querySelectorAll(
  '.header, .footer, .menu, .slider, .contact');
const button = document.querySelectorAll('.button');
const link = document.querySelectorAll('.link');
const menuLink = document.querySelectorAll('.menu__link');
const slider = document.querySelectorAll('.slider__image');
const shadowImg = document.querySelectorAll('.expertise__item-img');
const shadowCard = document.querySelectorAll('.service-card');
const id = document.querySelectorAll('.service-card__num');
const buttonArrow = document.querySelectorAll('.service-card__link');
const shadowTestimonials = document.querySelectorAll('.testimonials__review');
const rectangle = document.querySelectorAll('.testimonials__review__decor');
const rectangleDown = document.querySelectorAll(
  '.testimonials__review__decor-down');
const quotes = document.querySelectorAll('.testimonials__review__quotes');
const bgVision = document.querySelector('.vision');
const contactLink = document.querySelectorAll('.contact__link');

toggler.addEventListener('click', () => {
  rectangle[0].classList.toggle('testimonials__review__decor--blue');
  rectangleDown[0].classList.toggle('testimonials__review__decor-down--blue');
  rectangle[2].classList.toggle('testimonials__review__decor--yellow');
  rectangleDown[1].classList.toggle('testimonials__review__decor-down--yellow');
  rectangle[4].classList.toggle('testimonials__review__decor--pink');
  rectangleDown[2].classList.toggle('testimonials__review__decor-down--pink');

  quotes[0].classList.toggle('testimonials__review__quotes--blue');
  quotes[1].classList.toggle('testimonials__review__quotes--yellow');
  quotes[2].classList.toggle('testimonials__review__quotes--pink');

  bgColor[0].classList.toggle('header--blue');
  bgColor[2].classList.toggle('menu--blue');
  bgColor[3].classList.toggle('contact--blue');
  bgColor[4].classList.toggle('footer--blue');
  bgVision.classList.toggle('vision--colorful');
  theme.classList.toggle('icon--theme-blue');

  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.toggle('slider__image--border');
  }

  for (let i = 0; i < shadowImg.length; i++) {
    shadowImg[i].classList.toggle('expertise__item-img--shadow');
  }

  for (let i = 0; i < link.length; i++) {
    link[i].classList.toggle('link--pink');
  }

  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].classList.toggle('menu__link--pink');
  }

  for (let i = 0; i < contactLink.length; i++) {
    contactLink[i].classList.toggle('contact__link--pink');
  }

  for (let i = 0; i < button.length; i++) {
    button[i].classList.toggle('button--pink');
  }

  shadowTestimonials[0].classList.toggle('testimonials__review--blue');
  shadowTestimonials[1].classList.toggle('testimonials__review--yellow');
  shadowTestimonials[2].classList.toggle('testimonials__review--pink');

  shadowCard[0].classList.toggle('service-card--blue');
  shadowCard[2].classList.toggle('service-card--yellow');
  shadowCard[1].classList.toggle('service-card--green');
  shadowCard[3].classList.toggle('service-card--pink');

  id[0].classList.toggle('service-card__num--blue');
  id[2].classList.toggle('service-card__num--yellow');
  id[1].classList.toggle('service-card__num--green');
  id[3].classList.toggle('service-card__num--pink');

  buttonArrow[0].classList.toggle('service-card__link--blue');
  buttonArrow[2].classList.toggle('service-card__link--yellow');
  buttonArrow[1].classList.toggle('service-card__link--green');
  buttonArrow[3].classList.toggle('service-card__link--pink');
});
