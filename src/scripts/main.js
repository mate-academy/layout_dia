'use strict';

const prevSlider = document.querySelector('.icon--left');
const nextSlider = document.querySelector('.icon--right');
const slides = Array.from(document.querySelectorAll('.slider__image'));
const slideCount = slides.length;
let currentIndex = 0;

prevSlider.addEventListener('click', () => {
  currentIndex = (currentIndex !== 0) ? currentIndex - 1 : slideCount - 1;
  updateSlider();
});

nextSlider.addEventListener('click', () => {
  currentIndex = (currentIndex !== slideCount - 1) ? currentIndex + 1 : 0;
  updateSlider();
});

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();
