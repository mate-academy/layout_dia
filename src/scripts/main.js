'use strict';

function openMenu() {
  function hideElement(element) {
    element.classList.add('hidden');
  }

  function showElement(element) {
    element.classList.remove('hidden');
  }

  const menu = document.getElementById('menu');
  const openMenuButton = document.getElementById('menu-open-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const hireUs = document.getElementById('hire-us');

  const menuNavChildren = document.getElementById('menu__nav').childNodes;

  const pageBody = document.body;

  function closeMenu() {
    hideElement(closeMenuButton);
    showElement(openMenuButton);

    hideElement(menu);
    pageBody.classList.remove('page__body--with_menu');
  }

  function addEventListenerCloseMenuOnClick(element) {
    element.addEventListener('click', () => {
      closeMenu();
    });
  }

  hideElement(closeMenuButton);
  hideElement(menu);

  openMenuButton.addEventListener('click', () => {
    hideElement(openMenuButton);
    showElement(closeMenuButton);

    showElement(menu);
    pageBody.classList.add('page__body--with_menu');
  });

  addEventListenerCloseMenuOnClick(closeMenuButton);

  addEventListenerCloseMenuOnClick(hireUs);

  for (const element of [...menuNavChildren]) {
    addEventListenerCloseMenuOnClick(element);
  }
}

function createSlider() {
  const slidesFolder = '../images/slider';

  const slides = [
    { url: `${slidesFolder}/1.jpg` },
    { url: `${slidesFolder}/2.jpg` },
    { url: `${slidesFolder}/3.jpg` },
  ];

  const slidesAmount = slides.length;

  let currentSlide = 1;

  const slider = document.querySelector('.slider');
  const arrowLeft = document.getElementById('arrow-left');
  const arrowRight = document.getElementById('arrow-right');

  function appensSlideClass(prevSlide, newSlide) {
    slider.classList.remove(`slider--slide_${prevSlide}`);
    slider.classList.add(`slider--slide_${newSlide}`);
  }

  arrowLeft.addEventListener('click', () => {
    const prevSlide = currentSlide;

    if (--currentSlide < 1) {
      currentSlide = slidesAmount;
    }

    appensSlideClass(prevSlide, currentSlide);
  });

  arrowRight.addEventListener('click', () => {
    const prevSlide = currentSlide;

    if (++currentSlide > slidesAmount) {
      currentSlide = 1;
    }

    appensSlideClass(prevSlide, currentSlide);
  });

  const slideClass = `slider--slide_${currentSlide}`;

  slider.classList.add(slideClass);
}

window.addEventListener('load', function() {
  openMenu();
  createSlider();
});
