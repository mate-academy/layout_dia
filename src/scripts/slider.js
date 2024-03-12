'use strict';

let currentIndex = 0;
const slides = document.querySelectorAll('.slider__image');
const prevSliderButton = document.querySelector('.slider__bt-left');
const nextSliderButton = document.querySelector('.slider__bt-right');

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentIndex].style.display = 'block';
}

prevSliderButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide();
});

nextSliderButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide();
});

showSlide();
