'use strict';

let count = 1;

document
  .querySelector('.slider__arrow--right')
  .addEventListener('click', function () {
    function nextSlide() {
      const modPrefix = 'slider--';
      const slider = document.querySelector('.slider');

      slider.classList.add(modPrefix + (count + 1));
      count++;
      slider.classList.remove(modPrefix + (count - 1));

      if (count > 4) {
        slider.classList.remove(modPrefix + 5);
        count = 1;
      }
    }
    nextSlide();
  });

  document
  .querySelector('.slider__arrow--left')
  .addEventListener('click', function () {
    function prevSlide() {
      const modPrefix = 'slider--';
      const slider = document.querySelector('.slider');

      if (count <= 1) {
        slider.classList.remove(modPrefix + 1);
        count = 5;
      }

      slider.classList.add(modPrefix + (count - 1));
      count--;
      slider.classList.remove(modPrefix + (count + 1));
    }
    prevSlide();
  });
