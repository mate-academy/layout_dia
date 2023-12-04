'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const blocks = document.querySelectorAll('.page__section');
  const headerInfo = document.querySelector('.strategic__info');
  const result = document.querySelector('.result__content');
  let firstLoad = true;

  function handleScroll() {
    const resultTop = result.getBoundingClientRect().top;

    if (firstLoad) {
      headerInfo.style.opacity = '1';
      firstLoad = false;
    }

    if (resultTop < window.innerHeight - 80) {
      result.style.transform = 'translateY(0)';
    }

    blocks.forEach((block) => {
      const blockTop = block.getBoundingClientRect().top;

      if (blockTop < window.innerHeight - 100) {
        block.style.opacity = '1';
        block.style.transform = 'translateX(0)';
      }
    });
  }

  // Initial check in case some blocks are already in the viewport
  handleScroll();

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
});

const form = document.getElementById('form');

form.addEventListener('submit', formSubmit);

function formSubmit(evt) {
  evt.preventDefault();
  form.reset();
}

let currentSlide = 1;

let myInterval = setInterval(showNextSlide, 3000);

function showPrevSlide() {
  clearInterval(myInterval);

  slider.classList.remove(`strategic__slider--${currentSlide}`);

  currentSlide > 1
    ? currentSlide--
    : currentSlide = 3;

  slider.classList.add(`strategic__slider--${currentSlide}`);
}

function showNextSlide() {
  slider.classList.remove(`strategic__slider--${currentSlide}`);

  currentSlide === 3
    ? currentSlide = 1
    : currentSlide++;

  slider.classList.add(`strategic__slider--${currentSlide}`);
}

function restartInterval() {
  clearInterval(myInterval);
  myInterval = setInterval(showNextSlide, 3000);
}

function handleNextClick() {
  showNextSlide();
  restartInterval();
}

function handlePrevClick() {
  showPrevSlide();
  restartInterval();
}

const slider = document.querySelector('.strategic__slider');
const prevSlide = document.querySelector('.strategic__slider-button--prev');
const nextSlide = document.querySelector('.strategic__slider-button--next');

prevSlide.addEventListener('click', handlePrevClick);

nextSlide.addEventListener('click', handleNextClick);
