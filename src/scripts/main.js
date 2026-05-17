'use strict';

const slides = document.querySelectorAll('.slider__image');
const prevButton = document.querySelector('.slider__control--prev');
const nextButton = document.querySelector('.slider__control--next');

let currentSlideIndex = 0;

function showSlide(index) {
  slides[currentSlideIndex].classList.remove('slider__image--active');
  slides[index].classList.add('slider__image--active');

  currentSlideIndex = index;
}


nextButton.addEventListener('click', () => {
  const nextIndex = (currentSlideIndex + 1) % slides.length;

  showSlide(nextIndex);
});

prevButton.addEventListener('click', () => {
  const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

  showSlide(prevIndex);
})


const form = document.querySelector('.footer__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();

  window.scrollTo(0, 0);
});
