'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Slider

const prevButton = document.querySelector('.slider__btn-prev');
const nextButton = document.querySelector('.slider__btn-next');
let slideIndex = 0;

showSlides(slideIndex);

function plusSlide(item) {
  showSlides(slideIndex += item);
}

function showSlides(item) {
  const slides = document.querySelectorAll('.slider__item');

  if (item > slides.length - 1) {
    slideIndex = 0;
  }

  if (item < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

prevButton.addEventListener('click', () => plusSlide(-1));
nextButton.addEventListener('click', () => plusSlide(1));
