'use strict';

// Get the slider container element
const slider = document.querySelector('.header__slider');

// Get all the images in the slider
const slides = slider.querySelectorAll('.header__slider-item');

// Get the previous and next arrow buttons
const prevArrow = document.querySelector('.icon--arrow--left');
const nextArrow = document.querySelector('.icon--arrow--right');

// Set the current slide index to 0
let currentSlide = 0;

// Add event listeners to the buttons
prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);

// Define the prevSlide function
function prevSlide() {
  // Hide the current slide
  slides[currentSlide].style.display = 'none';

  // Move to the previous slide
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  // Show the new slide
  slides[currentSlide].style.display = 'block';
}

// Define the nextSlide function
function nextSlide() {
  // Hide the current slide
  slides[currentSlide].style.display = 'none';

  // Move to the next slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Show the new slide
  slides[currentSlide].style.display = 'block';
}
