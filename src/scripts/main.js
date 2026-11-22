'use strict';

// #region slider
const slides = document.querySelectorAll('.slider__slide');
const prevImg = document.querySelector('.slider__button--prev');
const nextImg = document.querySelector('.slider__button--next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('slider__slide--active');
  });

  slides[index].classList.add('slider__slide--active');
}

nextImg.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevImg.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});
// #endregion

// #region aside
const menu = document.querySelector('.page__menu');
const openBtn = document.querySelector('.js-menu-open');
const closeBtn = document.querySelector('.js-menu-close');

const openMenu = () => {
  menu.classList.add('page__menu--open');
  document.body.classList.add('page__body--no-scroll');
}

const closeMenu = () => {
  menu.classList.remove('page__menu--open');
  document.body.classList.remove('page__body--no-scroll');
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')){
    closeMenu();
  }
});

document.addEventListener('keydown', (event) =>{
  if (event.key === 'Escape' && menu.classList.contains('page__menu--open')) {
    closeMenu();
  }
});
// #endregion
