'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const totalSlides = document.querySelectorAll('.slider__foto').length;

  let currentIndex = 0;
  let isTransitioning = false;

  function showSlide(index) {
    const hiddenClass = 'slider__foto--hidden';

    document.querySelectorAll('.slider__foto').forEach((foto, i) => {
      if (i === index) {
        foto.classList.remove(hiddenClass);
      } else {
        foto.classList.add(hiddenClass);
      }
    });
  }

  function changeSlide(direction) {
    if (isTransitioning) {
      return;
    }

    isTransitioning = true;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }

    showSlide(currentIndex);

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  const prevBtn = document.querySelector('.slider__button--prev');
  const nextBtn = document.querySelector('.slider__button--next');

  prevBtn.addEventListener('click', () => changeSlide(-1));
  nextBtn.addEventListener('click', () => changeSlide(1));

  document.querySelectorAll('.slider__foto').forEach((foto, i) => {
    if (i !== currentIndex) {
      foto.classList.add('slider__foto--hidden');
    }
  });
});
