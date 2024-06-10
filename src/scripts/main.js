'use strict';

// added menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});

// added carusel to header
let slideIndex = 0;
const images = [
  './images/slider/slide-img-1.jpg',
  './images/slider/slide-img-2.jpg',
  './images/slider/slide-img-3.jpg',
];

const showSlide = (index) => {
  const carousel = document.getElementById('carousel');

  if (index < 0) {
    slideIndex = images.length - 1;
  } else if (index >= images.length) {
    slideIndex = 0;
  } else {
    slideIndex = index;
  }

  carousel.style.backgroundImage = `url('${images[slideIndex]}')`;
};

/* const nextSlide = () => {
  console.log('Next slide clicked');
  showSlide(slideIndex + 1);
};

const prevSlide = () => {
  console.log('Previous slide clicked');
  showSlide(slideIndex - 1);
}; */

document.addEventListener('DOMContentLoaded', function() {
  showSlide(slideIndex);
});
