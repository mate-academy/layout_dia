'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider__image');
  const btnNext = document.querySelector('.slider__arrow--next');
  const btnPrev = document.querySelector('.slider__arrow--prev');
  const form = document.querySelector('.footer__form');

  console.log('slides:', slides.length);
  console.log('next:', btnNext);
  console.log('prev:', btnPrev);


  if (!slides.length || !btnNext || !btnPrev) {
    return;
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.reset();
    });
  }

  let current = 0;

  function render() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === current);
    });
  }

  btnNext.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    render();
  });

  btnPrev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    render();
  });

  render();
});
