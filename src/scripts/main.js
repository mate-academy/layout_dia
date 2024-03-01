'use strict';

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const slides = Array.from(slider.querySelectorAll('.slider__slide'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();

const page = document.querySelector('.page');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const buttons = Array.from(document.querySelectorAll('.button__link'));
const switcher = document.querySelector('.theme-switcher');
const contactsSocLinkFb = document.querySelector('.contacts__soc-link--fb');
const contactsSocLinkIg = document.querySelector('.contacts__soc-link--ig');
const contactsSocLinkTw = document.querySelector('.contacts__soc-link--tw');
const serviceNumbers = Array.from(document.querySelectorAll('.service__number'));
const serviceLinks = Array.from(document.querySelectorAll('.service__link'));
const serviceLinksText = Array.from(document.querySelectorAll('.service__link-text'));
const arrowBox = Array.from(document.querySelectorAll('.service__arrow-box'));
const colors = ['blue', 'orange', 'green', 'red'];

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--theme--light')) {
    page.classList.remove('page--theme--light');
    header.classList.remove('header--theme-light');
    footer.classList.remove('footer--theme-light');
    contactsSocLinkFb.classList.remove('contacts__soc-link--fb--theme-light');
    contactsSocLinkIg.classList.remove('contacts__soc-link--ig--theme-light');
    contactsSocLinkTw.classList.remove('contacts__soc-link--tw--theme-light');
    switcher.textContent = 'to light theme';

    for (const button of buttons) {
      button.classList.remove('button__link--theme-light');
    }

    for (let i = 0; i < serviceNumbers.length; i++) {
      serviceNumbers[i].classList.remove(`service__number--${colors[i]}`);
      serviceLinks[i].classList.remove(`service__link--${colors[i]}`);
      serviceLinksText[i].classList.remove(`service__link-text--${colors[i]}`);
      arrowBox[i].classList.remove(`service__arrow-box--${colors[i]}`);
    }
  } else {
    page.classList.add('page--theme--light');
    header.classList.add('header--theme-light');
    footer.classList.add('footer--theme-light');
    contactsSocLinkFb.classList.add('contacts__soc-link--fb--theme-light');
    contactsSocLinkIg.classList.add('contacts__soc-link--ig--theme-light');
    contactsSocLinkTw.classList.add('contacts__soc-link--tw--theme-light');
    switcher.innerHTML = 'To dark theme';

    for (const button of buttons) {
      button.classList.add('button__link--theme-light');
    }

    for (let i = 0; i < serviceNumbers.length; i++) {
      serviceNumbers[i].classList.add(`service__number--${colors[i]}`);
      serviceLinks[i].classList.add(`service__link--${colors[i]}`);
      serviceLinksText[i].classList.add(`service__link-text--${colors[i]}`);
      arrowBox[i].classList.add(`service__arrow-box--${colors[i]}`);
    }
  }
});
