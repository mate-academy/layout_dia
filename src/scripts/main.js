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

const slider = document.querySelector('.slider');
const next = document.querySelector('.slider__button--right');
const previous = document.querySelector('.slider__button--left');

const slides = [
  'url(../images/slider/slide-img-1.png)',
  'url(../images/slider/slide-img-2.png)',
  'url(../images/slider/slide-img-3.png)',
];

let currentSlide = 0;

// slider.style.backgroundImage = slides[currentSlide];

function goToSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  slider.style.backgroundImage = slides[currentSlide];
};

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

next.onclick = () => {
  nextSlide();
};

previous.onclick = () => {
  previousSlide();
};
