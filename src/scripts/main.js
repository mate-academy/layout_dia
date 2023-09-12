/* eslint-disable max-len */
'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#upmenu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// const pageReload = document.querySelector('#form-reload');

// pageReload.addEventListener('submit', function formReload(event) {
//   event.preventDefault();
//   pageReload.reset();
// });
document.addEventListener('DOMContentLoaded', () => {
  const sliderImages = document.querySelectorAll('.slider__img');

  const prevButton = document.querySelector('.slider__prev-button');
  const nextButton = document.querySelector('.slider__next-button');

  let currentImageIndex = 0;

  function showCurrentImage() {
    sliderImages.forEach((image, index) => {
      if (index === currentImageIndex) {
        image.style.opacity = '1';
      } else {
        image.style.opacity = '0';
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentImageIndex -= 1;

    if (currentImageIndex < 0) {
      currentImageIndex = sliderImages.length - 1;
    }
    showCurrentImage();
  });

  nextButton.addEventListener('click', () => {
    currentImageIndex += 1;

    if (currentImageIndex >= sliderImages.length) {
      currentImageIndex = 0;
    }
    showCurrentImage();
  });

  showCurrentImage();

  setInterval(() => {
    currentImageIndex += 1;

    if (currentImageIndex >= sliderImages.length) {
      currentImageIndex = 0;
    }
    showCurrentImage();
  }, 6000);
});
