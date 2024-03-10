'use strict';

let currentIndex = 0;
const slides = document.querySelectorAll('.slider__image');

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentIndex].style.display = 'block';
}

function prevImage() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide();
}

showSlide();
