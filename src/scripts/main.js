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

document.querySelector('.slider__arrow--right').addEventListener('click', next);
document.querySelector('.slider__arrow--left').addEventListener('click', prev);

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const burgerOpen = document.getElementById('open');
const burgerClose = document.getElementById('close');

burgerOpen.addEventListener('click', () => {
  burgerOpen.classList.add('header__burger-on');
});

burgerClose.addEventListener('click', () => {
  burgerOpen.classList.remove('header__burger-on');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#menu') {
    burgerOpen.classList.remove('header__burger-on');
  }
});
