'use strict';

const header = document.querySelector('.header');
const buttonPage = document.querySelectorAll('.button');
const switcher = document.querySelector('.theme-switcher');
const menu = document.querySelector('.menu');
const hire = document.querySelectorAll('.top-bar__hire');
const sliderBorder = document.querySelectorAll('.slider__box-content-photo');
const navLinks = document.querySelectorAll('.nav__link');
const footer = document.querySelector('.footer');
const field = document.querySelectorAll('.form__field');
const visionBcground = document.querySelectorAll('.vision');

switcher.addEventListener('click', () => {
  if (header.classList.contains('header--theme--dark')) {
    header.classList.remove('header--theme--dark');

    visionBcground.forEach((element) => {
      element.classList.remove('vision--theme--dark');
    });

    field.forEach((input) => {
      input.classList.remove('form__field--theme--dark');
    });

    footer.classList.remove('footer--theme--dark');

    switcher.classList.remove('theme-switcher--theme--dark');

    menu.classList.remove('menu--theme--dark');

    hire.forEach((hireElement) => {
      hireElement.classList.remove('top-bar__hire--theme--dark');
    });

    buttonPage.forEach((buttonElement) => {
      buttonElement.classList.remove('button--theme--dark');
    });

    sliderBorder.forEach(photo => {
      photo.classList.remove('slider__box-content-photo--theme--dark');
    });

    navLinks.forEach((link) => {
      link.classList.remove('nav__link--theme--dark');
    });
  } else {
    header.classList.add('header--theme--dark');

    visionBcground.forEach((element) => {
      element.classList.add('vision--theme--dark');
    });

    field.forEach((input) => {
      input.classList.add('form__field--theme--dark');
    });

    footer.classList.add('footer--theme--dark');

    buttonPage.forEach((buttonElement) => {
      buttonElement.classList.add('button--theme--dark');
    });

    switcher.classList.add('theme-switcher--theme--dark');

    menu.classList.add('menu--theme--dark');

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
