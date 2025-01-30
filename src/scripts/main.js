'use strict';

// slider
const slidesList = document.querySelector('.slider__list');
const slides = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('.slider__button--prev');
const nextBtn = document.querySelector('.slider__button--next');

let currentSlide = 0;

function updateSliderPosition() {
  slidesList.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  updateSliderPosition();
});

// menu-overlay
const overlay = document.getElementById('menu-overlay');

overlay.addEventListener('click', () => {
  window.location.hash = '';
});

// animations

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('elm-show');
    }
  });
}

const options = {
  threshold: [0.1] };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.elm-anim');

for (const elm of elements) {
  observer.observe(elm);
}
