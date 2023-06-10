'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

let slideIndex = 0;

function slideShow(s) {
  const slides = document.querySelectorAll('.slider__item');

  if (s >= slides.length) {
    slideIndex = 0;
  }

  if (s <= 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

document.querySelector('#next').addEventListener('click', (e) => {
  e.preventDefault();
  slideShow(slideIndex += 1);
});

document.querySelector('#prev').addEventListener('click', (e) => {
  e.preventDefault();
  slideShow(slideIndex -= 1);
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#message-form').reset();
});
