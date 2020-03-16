'use strict';

const slide = document.querySelectorAll('.gallery__slider .gallery__slide');
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slide[currentSlide].className = 'gallery__slide';
  currentSlide = (n + slide.length) % slide.length;
  slide[currentSlide].className = 'gallery__slide gallery__slide_showing';
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};

const form = document.querySelector('.contact-form');
const emailInput = document.querySelector('.form__input_email');
const nameInput = document.querySelector('.form__input_name');
const messageInput = document.querySelector('.form__input_message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  emailInput.value = '';
  nameInput.value = '';
  messageInput.value = '';
});
