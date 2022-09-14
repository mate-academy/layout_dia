'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const next = document.querySelectorAll('.slide__switch-button--next');
const prev = document.querySelectorAll('.slide__switch-button--prev');
const slides = document.querySelector('.slider__slides');
const countOfSlides = slides.children.length;

let position = 0;

for (let i = 0; i < countOfSlides; i++) {
  next[i].addEventListener('click', moveNext);
  prev[i].addEventListener('click', movePrev);
}

function moveNext() {
  position++;

  if (position === countOfSlides) {
    position = 0;
  }

  slides.style.transform = `translateX(${-position * 100}%)`;
}

function movePrev() {
  position--;

  if (position < 0) {
    position = countOfSlides - 1;
  }

  slides.style.transform = `translateX(${-position * 100}%)`;
}

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
