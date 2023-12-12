/* global localStorage */
'use strict';

const themeItems = document.querySelectorAll('[data-theme-item]');
const themeSwitcher = document.querySelector('.theme-switcher');
const isLightThemeActive = JSON
  .parse(localStorage.getItem('isLightThemeActive'));

const changeTheme = () => {
  themeItems.forEach(item => {
    const itemValue = item.dataset.themeItem;
    const itemClass = itemValue + '--light-theme';

    item.classList.toggle(itemClass);
  });
};

const changeLocalStorageTheme = () => {
  const isActive = !(JSON.parse(localStorage.getItem('isLightThemeActive')));

  localStorage.setItem('isLightThemeActive', JSON.stringify(isActive));
};

themeSwitcher.addEventListener('click', () => {
  changeTheme();
  changeLocalStorageTheme();
});

if (isLightThemeActive === null) {
  localStorage.setItem('isLightThemeActive', JSON.stringify(false));
}

if (isLightThemeActive) {
  changeTheme();
}

const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__nav');

const closeMenu = () => {
  menu.classList.remove('header__nav--mobile-visible');

  menu.removeEventListener('click', closeMenu);
};

const openMenu = () => {
  menu.classList.add('header__nav--mobile-visible');

  menu.addEventListener('click', closeMenu);
};

menuButton.addEventListener('click', openMenu);

const leftButton = document.querySelector('.slider__button--left');
const rightButton = document.querySelector('.slider__button--right');
const sliderList = document.querySelector('.slider__list');
const slidesNumber = sliderList.children.length;
let currentSlide = 1;

const changeSlide = (step) => {
  currentSlide += step;

  if (currentSlide < 1) {
    currentSlide = slidesNumber;
  } else if (currentSlide > slidesNumber) {
    currentSlide = 1;
  }

  const shift = 100 / slidesNumber * (currentSlide - 1);

  sliderList.style.transform = `translateX(-${shift}%)`;
};

rightButton.addEventListener('click', () => {
  changeSlide(1);
});

leftButton.addEventListener('click', () => {
  changeSlide(-1);
});

const form = document.querySelector('.text-us__form');
const headerButton = document.querySelector('.header__button');
const serviceCardButtons = document.querySelectorAll('.service-card__button');
const visionButton = document.querySelector('.vision__button');
const pageTop = document.getElementById('page-top');
const aboutUsSection = document.getElementById('about-us');
const testimonialsSection = document.querySelector('.testimonials');
const contactUsSection = document.querySelector('.contact-us');

const scrollToSection = (section) => {
  section.scrollIntoView();
};

headerButton.addEventListener('click', () => {
  scrollToSection(aboutUsSection);
});

serviceCardButtons.forEach(button => {
  button.addEventListener('click', () => {
    scrollToSection(testimonialsSection);
  });
});

visionButton.addEventListener('click', () => {
  scrollToSection(contactUsSection);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  scrollToSection(pageTop);
});
