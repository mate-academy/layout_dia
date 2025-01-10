'use strict';

const buttonNext = document.querySelector('.arrow--right');
const buttonPrev = document.querySelector('.arrow--left');
const slides = document.querySelectorAll('.slider__img');

let currentIndex = 0;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
};

showSlide(currentIndex);

buttonNext.addEventListener('click', (event) => {
  event.preventDefault();
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});
buttonPrev.addEventListener('click', (event) => {
  event.preventDefault();
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});
