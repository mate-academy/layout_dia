'use strict';

const slides = document.querySelectorAll('.slider__image-container');
const arrowLeft = document.querySelector('.slider__arrow--left');
const arrowRight = document.querySelector('.slider__arrow--right');
let currentSlid = 0;



const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
  );
};

goToSlide(0);


function nextSlide() {
  currentSlid = (currentSlid + 1) % slides.length;
  goToSlide(currentSlid);
}

function prevSlide() {
  currentSlid = (currentSlid - 1 + slides.length) % slides.length;
  goToSlide(currentSlid);
}

arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);

// updateBackground();
