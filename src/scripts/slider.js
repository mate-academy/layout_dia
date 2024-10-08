'use strict';

const aSlides = document.querySelectorAll('.slider_slide');
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
  aSlides[slideIndex].classList.add('slider_slide--visible');
  intervalId = setInterval(nextSlide, 5000);
});

function showSlide(index) {
  if (index >= aSlides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = aSlides.length - 1;
  } else {
    slideIndex = index;
  }

  aSlides.forEach(slide => {
    slide.classList.remove('slider_slide--visible');
  });

  aSlides[slideIndex].classList.add('slider_slide--visible');
}

function prevSlide() {
  showSlide(slideIndex - 1);
  clearTimeout(intervalId);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}
