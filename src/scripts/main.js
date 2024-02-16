'use strict';

let slideIndex = 1;
let timer = 0;
const next = document.querySelector('.gallery__btn--next');
const prev = document.querySelector('.gallery__btn--prev');

function showSlides() {
  const slides = document.querySelectorAll('.gallery__slide');

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

makeTimer();

function makeTimer() {
  clearInterval(timer);

  timer = setInterval(function() {
    slideIndex++;
    showSlides();
  }, 5000);
}

next.addEventListener('click', function() {
  slideIndex += 1;
  showSlides();
  makeTimer();
});

prev.addEventListener('click', function() {
  slideIndex -= 1;
  showSlides();
  makeTimer();
});

function stopDefAction(event) {
  document.getElementById('form').reset();
  event.preventDefault();
}

document.getElementById('form').addEventListener(
  'submit', stopDefAction, false,
);
