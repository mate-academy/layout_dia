'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
}

const form = document.getElementById('contact-us-form');

form.addEventListener('submit', onFormSubmit);

let currentSlide = 0;
const slides = document.querySelectorAll('.slider__slide');
const arrowLeft = document.querySelector('.slider__arrow-left');
const arrowRight = document.querySelector('.slider__arrow-right');

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

arrowLeft.addEventListener('click', () => {
  prevSlide();
});

arrowRight.addEventListener('click', () => {
  nextSlide();
});

setInterval(nextSlide, 5000);

showSlide(currentSlide);
