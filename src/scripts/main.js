'use strict';

const closeButton = document.querySelector('.menu__close-btn');
const openButton = document.querySelector('.menu__open-btn');
const nav = document.querySelector('.menu');

closeButton.addEventListener('click', () => {
  nav.classList.add('menu-close');
});

openButton.addEventListener('click', () => {
  nav.classList.remove('menu-close');
});

const carousel = document.querySelector('.carousel__list');
const slides = Array.from(carousel.children);
const leftBtn = document.querySelector('.header__arrow--left');
const rightBtn = document.querySelector('.header__arrow--right');
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (carousele, currentSlide, targetSlide) => {
  carousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// on click slides move left
rightBtn.addEventListener('click', (e) => {
  const currentSlide = carousel.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(carousel, currentSlide, nextSlide);
});

leftBtn.addEventListener('click', (e) => {
  const currentSlide = carousel.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(carousel, currentSlide, prevSlide);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

// form reset
document.addEventListener('submit', function(event) {
  event.preventDefault();
  event.target.reset();
});
