'use strict';

let currentSlide = 0;
const slides = document.querySelectorAll('.slider__img');

function showSlide(n) {
  slides.forEach((slide) => (slide.style.opacity = 0));
  slides[n].style.opacity = 1;
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

const arrowLeft = document.querySelector('.arrow--left');
const arrowRight = document.querySelector('.arrow--right');

arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  this.reset();
});
