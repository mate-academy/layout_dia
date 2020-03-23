'use strict';

window.addEventListener('scroll', () => {
  const headerTop = document.querySelector('.header__top');

  headerTop.classList.toggle('sticky', window.scrollY > 0);
});

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.header__nav');

const links = document.querySelectorAll('.header__nav .nav__list .nav__item');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');

  links.forEach(link => {
    link.classList.toggle('fade');
  });
});

// Slider
let slideIndex = 1;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

showSlides(slideIndex);

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(item => item.classList.remove('showed'));

  slides[slideIndex - 1].classList.add('showed');
}

function plusSlide(n) {
  showSlides((slideIndex += n));
}

prev.addEventListener('click', () => {
  plusSlide(-1);
});

next.addEventListener('click', () => {
  plusSlide(1);
});
