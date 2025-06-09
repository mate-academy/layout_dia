'use strict';

import slide1 from '../images/slider/slider-img-large-desctop-1.png';
import slide2 from '../images/slider/slider-img-large-desctop-2.png';
import slide3 from '../images/slider/slider-img-large-desctop-3.png';
import slide4 from '../images/slider/slider-img-large-desctop-4.png';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

document.addEventListener('DOMContentLoaded', initSlider);

function initSlider() {
  const slider = document.querySelector('.slider');
  const arrowLeft = document.querySelector('.slider__arrow-left');
  const arrowRight = document.querySelector('.slider__arrow-right');
  const slides = [slide1, slide2, slide3, slide4];
  let currentSlide = 1;
  const maxSlide = slides.length;

  slides.forEach((slide, index) => {
    const img = document.createElement('div');
    img.classList.add('slider__image');
    if (index === 0) {
      img.classList.add('slider__image--active');
    }
    img.style.backgroundImage = `url(${slide})`;
    slider.appendChild(img);
  });

  const images = document.querySelectorAll('.slider__image');

  function updateSliderBackground(direction) {
    images.forEach((img, index) => {
      img.classList.remove(
        'slider__image--active',
        'slider__image--next',
        'slider__image--prev',
      );
      if (index === currentSlide - 1) {
        img.classList.add('slider__image--active');
      } else if (direction === 'left' && index === currentSlide) {
        img.classList.add('slider__image--next');
      } else if (direction === 'right' && index === currentSlide - 2) {
        img.classList.add('slider__image--prev');
      }
    });
  }

  arrowLeft.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentSlide > 1) {
      currentSlide--;
      updateSliderBackground('left');
    } else {
      currentSlide = maxSlide;
      updateSliderBackground('left');
    }
  });

  arrowRight.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentSlide < maxSlide) {
      currentSlide++;
      updateSliderBackground('right');
    } else {
      currentSlide = 1;
      updateSliderBackground('right');
    }
  });

  updateSliderBackground();
}
