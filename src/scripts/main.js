'use strict';

// Slider
let slideIndex = 1;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

showSlides(slideIndex);

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(item => item.classList.remove('showed'));

  slides[slideIndex - 1].classList.add('showed');
}

function plusSlide(n) {
  showSlides((slideIndex += n));
}

prev.addEventListener('click', () => {
  plusSlide(-1);
});

next.addEventListener('click', () => {
  plusSlide(1);
});
