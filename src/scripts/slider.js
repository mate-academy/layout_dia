'use strict';

const btnPrev = document.querySelector('.btn--prev');
const btnNext = document.querySelector('.btn--next');
const slides = document.querySelectorAll('.slide');
let counter = 0;

slides.forEach(
  (slide, index) => {
    slide.style.left = `${index * 100}%`;
  }
);

btnPrev.addEventListener('click', function() {
  if (counter !== 0) {
    counter--;
    slideImage();
  }
});

btnNext.addEventListener('click', function() {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
  }
});

const slideImage = () => {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    }
  );
};
