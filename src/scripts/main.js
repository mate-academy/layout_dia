'use strict';

const header = document.querySelector('.header');
const switcher = document.querySelector('.theme-switcher');
const menu = document.querySelector('.menu');
const hire = document.querySelectorAll('.top-bar__hire');
const headerButton = document.querySelector('.header__button');
const sliderBorder = document.querySelectorAll('.slider__box-content-photo');
const navLinks = document.querySelectorAll('.nav__link');

switcher.addEventListener('click', () => {
  if (header.classList.contains('header--theme--dark')) {
    header.classList.remove('header--theme--dark');

    switcher.classList.remove('theme-switcher--theme--dark');

    menu.classList.remove('menu--theme--dark');

    hire.forEach((hireElement) => {
      hireElement.classList.remove('top-bar__hire--theme--dark');
    });

    headerButton.classList.remove('header__button--theme--dark');

    sliderBorder.forEach(photo => {
      photo.classList.remove('slider__box-content-photo--theme--dark');
    });

    navLinks.forEach((link) => {
      link.classList.remove('nav__link--theme--dark');
    });
  } else {
    header.classList.add('header--theme--dark');

    switcher.classList.add('theme-switcher--theme--dark');

    menu.classList.add('menu--theme--dark');

    headerButton.classList.add('header__button--theme--dark');

    sliderBorder.forEach(photo => {
      photo.classList.add('slider__box-content-photo--theme--dark');
    });

    navLinks.forEach((link) => {
      link.classList.add('nav__link--theme--dark');
    });

    hire.forEach((hireElement) => {
      hireElement.classList.add('top-bar__hire--theme--dark');
    });
  }
});

// slider

let slideIndex = 0;
const slides = document.querySelectorAll('.slider__box-content-photo');
const nextButton = document.querySelector('.slider__button--right');
const prevButton = document.querySelector('.slider__button--left');

function slideShow(s) {
  if (s >= slides.length) {
    slideIndex = 0;
  }

  if (s < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

slideShow(slideIndex);

nextButton.addEventListener('click', (e) => {
  e.preventDefault();
  slideShow(slideIndex += 1);
});

prevButton.addEventListener('click', (e) => {
  e.preventDefault();
  slideShow(slideIndex -= 1);
});

// Button-link
const button = document.querySelector('button[data-target="#Our-expertise"]');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const section = document.querySelector('#Our-expertise');

  section.scrollIntoView({ behavior: 'smooth' });
});
