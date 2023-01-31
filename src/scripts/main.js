'use strict';

let currentSlide = 0;
const slides = document.querySelectorAll('.slider__slide');
const dots = document.querySelectorAll('.dots__dot');

const init = (n) => {
  slides.forEach((slide) => {
    slide.style.display = 'none';

    dots.forEach((dot) => {
      dot.classList.remove('dots__active');
    });
  });
  slides[n].style.display = 'block';
  dots[n].classList.add('dots__active');
};

document.addEventListener('DOMContentLoaded', init(currentSlide));

const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
  init(currentSlide);
};

document.querySelector('.buttons__arrow--right')
  .addEventListener('click', next);
document.querySelector('.buttons__arrow--left').addEventListener('click', prev);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--with-menu');
} else {
  document.body.classList.remove('page__body--with-menu');
};
