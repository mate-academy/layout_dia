'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const sliderToLeft = document.querySelector('.js-slider-click-left');
const sliderToRight = document.querySelector('.js-slider-click-right');

sliderToLeft.addEventListener('click', () => plusSlides(-1));
sliderToRight.addEventListener('click', () => plusSlides(1));

let slideIndex = 0;
const slides = document.querySelectorAll('.slider-img');

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  };

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (const slide of slides) {
    slide.style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}
