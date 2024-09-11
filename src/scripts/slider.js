'use strict';

const theSlides = document.querySelectorAll('.slider_slide');
const nextSlideBtns = document.querySelectorAll('.slider_slide_extra_control--right');
const prevSlideBtns = document.querySelectorAll('.slider_slide_extra_control--left');

let slideIndex = 0;
let intervalId = null;

nextSlideBtns.forEach(button => {
  button.addEventListener('click', nextSlide);
});

prevSlideBtns.forEach(button => {
  button.addEventListener('click', prevSlide);
});

document.addEventListener('DOMContentLoaded', function () {
  theSlides[slideIndex].classList.add('slider_slide--visible');
  intervalId = setInterval(nextSlide, 5000);
});

function showSlide(index) {
  if (index >= theSlides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = theSlides.length - 1;
  } else {
    slideIndex = index;
  }

  theSlides.forEach(slide => {
    slide.classList.remove('slider_slide--visible');
  });

  theSlides[slideIndex].classList.add('slider_slide--visible');
}

function prevSlide() {
  showSlide(slideIndex - 1);
  clearTimeout(intervalId);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}
