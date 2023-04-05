'use strict';

const prevBtn = document.querySelector('.slider__button--prevBtn');
const nextBtn = document.querySelector('.slider__button--nextBtn');
const form = document.querySelector('.send-us-a-message__form-field');

let slideIndex = 1;

showSlides(slideIndex);

prevBtn.addEventListener('click', () => {
  showSlides((slideIndex -= 1));
});

nextBtn.addEventListener('click', () => {
  showSlides((slideIndex += 1));
});

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.slider__element');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'flex';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
