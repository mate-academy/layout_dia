'use strict';

const nextButton = document.querySelector('.slider__button--right');
const prevButton = document.querySelector('.slider__button--left');

let slideIndex = 0;

function showSlides(x) {
  const slides = document.querySelectorAll('.slider__img');

  if (x > slides.length - 1) {
    slideIndex = 0;
  }

  if (x < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

showSlides(slideIndex);

function plusSlide(i) {
  showSlides(slideIndex += i);
}

nextButton.addEventListener('click', () => plusSlide(1));
prevButton.addEventListener('click', () => plusSlide(-1));
