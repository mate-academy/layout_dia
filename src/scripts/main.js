'use strict';

const images = document.querySelectorAll('.slider__box--image');
const prevButton = document.querySelector('.slider__button--left');
const nextButton = document.querySelector('.slider__button--right');
let currentIndex = 0;

function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
}

function prevImage() {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

showImage(currentIndex);

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('page__body--with-menu')
    : document.body.classList.remove('page__body--with-menu');
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
