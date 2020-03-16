'use strict';

const slider = document.querySelectorAll('.carousel .carousel-item');
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slider[currentSlide].className = 'carousel-item';
  currentSlide = (n + slider.length) % slider.length;
  slider[currentSlide].className = 'carousel-item showing';
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};
