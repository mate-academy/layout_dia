'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const slides = ['slider--1', 'slider--2', 'slider--3'];
let slideIndex = 0;
const activeSlide = document.getElementById('slide');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

next.onclick = () => {
  activeSlide.classList.remove(slides[slideIndex]);

  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex += 1;
  }

  activeSlide.classList.add(slides[slideIndex]);
};

prev.onclick = () => {
  activeSlide.classList.remove(slides[slideIndex]);

  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex -= 1;
  }

  activeSlide.classList.add(slides[slideIndex]);
};
