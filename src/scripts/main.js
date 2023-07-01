'use strict';

// header actions
const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');

  headerMenu.classList.toggle(
    'header__menu--active', burgerMenu.classList.contains('active')
  );

  document.body.classList.toggle(
    'page__body--with-menu',
    burgerMenu.classList.contains('active')
  );
});

header.addEventListener('click', (event) => {
  if (event.target.matches('.logo__image')
    || event.target.matches('.header__hire-us')
    || event.target.matches('.menu__link')) {
    burgerMenu.classList.remove('active');
    headerMenu.classList.remove('header__menu--active');
    document.body.classList.remove('page__body--with-menu');
  }
});

// slider
const nextSlideButton = document.querySelector('.slider__button--next');
const prevSlideButton = document.querySelector('.slider__button--prev');

nextSlideButton.addEventListener('click', () => buttonHandler(1));
prevSlideButton.addEventListener('click', () => buttonHandler(-1));

let slideIndex = 1;

showSlide(slideIndex);

function buttonHandler(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slider__slide');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

// form reset
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
