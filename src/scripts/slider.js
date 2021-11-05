'use strict';

window.addEventListener('resize', handleResize);

const slider = document.querySelector('.jsSlider');
const slidesWrap = document.querySelector('.jsSlidesWrap');

let interval = null;
let i = 1;

function updateSlider() {
  clearInterval(interval);
  slidesWrap.style.transform = `translateX(0px)`;

  const sliderBounds = slider.getBoundingClientRect();
  const slides = [...slidesWrap.children];
  const slidesCount = slides.length;

  slides.forEach(el => {
    el.style.width = `${sliderBounds.width}px`;
  });

  const width = `${sliderBounds.width * slidesCount}px`;

  slidesWrap.style.width = width;

  interval = setInterval(() => {
    if (i >= slidesCount) {
      i = 0;
    }

    slidesWrap.style.transform = `translateX(-${sliderBounds.width * i}px)`;
    i++;
  }, 2000);
}

function handleResize() {
  updateSlider();
}

updateSlider();
