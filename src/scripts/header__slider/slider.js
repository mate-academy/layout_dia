'use strict';

// slider
const slides = document.querySelectorAll('#slides .slider__slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);

function goToSlide(n) {
  slides[currentSlide].className = 'slider__slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slider__slide slider__slide-showing';
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

// pause slider
let playing = true;

function pauseSlideshow() {
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  if (!playing) {
    playing = true;
    slideInterval = setInterval(nextSlide, 3500);
  }
}

// control button

const next = document.getElementById('pic-right');
const previous = document.getElementById('pic-left');

next.onclick = function() {
  pauseSlideshow();
  nextSlide();

  setTimeout(playSlideshow, 4000);
};

previous.onclick = function() {
  pauseSlideshow();
  previousSlide();

  setTimeout(playSlideshow, 4000);
};
