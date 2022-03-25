'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function stopDefAction(event) {
  document.getElementById('contactForm').reset();
  event.preventDefault();
}

document.getElementById('contactForm').addEventListener(
  'submit', stopDefAction, false
);

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);

  return undefined;
}

const rightButton = document.getElementById('slider-right');
const leftButton = document.getElementById('slider-left');

const leftListener = () => plusSlides(-1);
const rightListener = () => plusSlides(1);

rightButton.addEventListener('click', leftListener);
leftButton.addEventListener('click', rightListener);

function showSlides(n) {
  const slides = document.getElementsByClassName('slider__image');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}
