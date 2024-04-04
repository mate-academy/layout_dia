'use strict';

const slider = document.querySelector('.slideshow__content');
const slides = Array.from(slider.querySelectorAll('.slideshow__content--photo'));
const slideCount = slides.length;
let slideIndex = 0;
let intervalId;

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function startAutoplay() {
  intervalId = setInterval(showNextSlide, 3000);
}

function stopAutoplay() {
  clearInterval(intervalId);
}

startAutoplay();

document.querySelector('.prev-button').addEventListener('click', () => {
  showPreviousSlide();
  stopAutoplay();
});

document.querySelector('.next-button').addEventListener('click', () => {
  showNextSlide();
  stopAutoplay();
});



