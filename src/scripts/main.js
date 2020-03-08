'use strict';

const menu = () => {
  const burger = document.querySelector('.header__button');
  const mobilenav = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('header__button--active');

    if (burger.classList.contains('header__button--active')) {
      mobilenav.style.display = 'flex';
    } else {
      mobilenav.removeAttribute('style');
    }
  });
};

menu();

const slider = document.querySelectorAll('.slider__list .slider__slide');
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slider[currentSlide].className = 'slider__slide';
  currentSlide = (n + slider.length) % slider.length;
  slider[currentSlide].className = 'slider__slide showing';
}

const next = document.querySelector('.slider__button--left');
const previous = document.querySelector('.slider__button--right');

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};
