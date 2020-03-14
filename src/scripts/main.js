'use strict';

const slider = document.querySelectorAll('.slider .slide');
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slider[currentSlide].className = 'slide';
  currentSlide = (n + slider.length) % slider.length;
  slider[currentSlide].className = 'slide showing';
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};
