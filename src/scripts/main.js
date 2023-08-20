'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

const left = document.getElementById('left');

left.addEventListener('click', previousSlide);

const right = document.getElementById('right');

right.addEventListener('click', nextSlide);

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('slider__item');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (const slide of slides) {
    slide.style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

const myForm = document.getElementById('form');

myForm.addEventListener('submit', function formСleaning(event) {
  event.preventDefault();

  myForm.reset();
});
