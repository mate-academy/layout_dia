'use strict';

// Slider

const leftButton = document.querySelector('.slider__button--left');
const rightButton = document.querySelector('.slider__button--right');
const slides = document.querySelectorAll('.slider__image');
let index = 0;

showSlides(index);

function nextSlide(num) {
  showSlides(index += num);
}

function showSlides(num) {
  if (num > slides.length - 1) {
    index = 0;
  }

  if (num < 0) {
    index = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[index].style.display = 'block';
}

leftButton.addEventListener('click', () => nextSlide(-1));
rightButton.addEventListener('click', () => nextSlide(1));

// Menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Form

const form = document.querySelector('.contact__form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  this.reset();
}
