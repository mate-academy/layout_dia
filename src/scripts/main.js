'use strict';
let currentSlide = 0;

function slider(i) {
  const forward = document.querySelector('.slide__forward');
  const backward = document.querySelector('.slide__backward');
  forward.addEventListener('click', nextSlide);
  backward.addEventListener('click', prevSlide);
  const slides = document.querySelectorAll('.slider__image');
  const n = slides.length;

  if (i >= n) {
    currentSlide = 0;
  } else if (i < 0) {
    currentSlide = n - 1;
  } else {
    currentSlide = i;
  }

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');

  // const sliderImages = document.querySelector('.slider__images');
  // sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  slider(currentSlide + 1);
}

function prevSlide() {
  slider(currentSlide - 1);
}

slider(currentSlide);
