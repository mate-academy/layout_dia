'use strict';

const slider = document.querySelector('.header__slider');
const slides = slider.querySelectorAll('.header__slider-item');
const prevArrow = document.querySelector('.icon--arrow--left');
const nextArrow = document.querySelector('.icon--arrow--right');

let currentSlide = 0;

prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);

function prevSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}
