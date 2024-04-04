'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.slider__photo');
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.remove('hidden');
      } else {
        image.classList.add('hidden');
      }
    });
  }

  function nextSlide() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  function prevSlide() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }

  const nextButton = document.querySelector('.button--slider.next');
  const prevButton = document.querySelector('.button--slider.prev');

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
});
