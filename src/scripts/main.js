'use strict';

const page = document.querySelector('.page');
const togglers = document.querySelectorAll('.menu__toggler');
const menu = document.querySelector('.menu__list-container');
const notabs = document.querySelectorAll('.notab *');
const noDefault = document.querySelector('.noDefault');
const featureMenuTogglers = document.querySelectorAll('.feature-menu-toggler');
const featureContainers = document.querySelectorAll('.feature__container');
const darkFeatures = document.querySelectorAll('.feature-dark');
const blueFeatures = document.querySelectorAll('.feature-blue');
const specialFeatures = document.querySelectorAll('.feature-special');
const swiperLeftArrow = document.querySelector('.swiper__toggler-left');
const swiperRightArrow = document.querySelector('.swiper__toggler-right');
const swiperContainer = document.querySelector('.swiper__wrapper');

let currentSwiperPosition = 0;

swiperLeftArrow.addEventListener('click', function() {
  if (currentSwiperPosition === 0) {
    currentSwiperPosition = -200;
  } else {
    currentSwiperPosition += 100;
  }
  swiperContainer.style.transform = `translateX(${currentSwiperPosition}%)`;
});

swiperRightArrow.addEventListener('click', function() {
  if (currentSwiperPosition === -200) {
    currentSwiperPosition = 0;
  } else {
    currentSwiperPosition -= 100;
  }
  swiperContainer.style.transform = `translateX(${currentSwiperPosition}%)`;
});

noDefault.addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('message')[0].value = '';
});

togglers.forEach((toggler) => {
  toggler.addEventListener('click', function() {
    page.classList.toggle('page--with-modal');
    menu.classList.toggle('menu__list-container--open');

    notabs.forEach((element) => {
      if (element.getAttribute('tabindex') === '-1') {
        element.toggleAttribute('tabindex');
      } else {
        element.setAttribute('tabindex', '-1');
      }
    });
  });
});

featureMenuTogglers.forEach((featureMenuToggler) => {
  featureContainers.forEach((featureContainer) => {
    featureMenuToggler.addEventListener('click', function() {
      featureContainer.classList.toggle('feature__container--on');
    });
  });
});

darkFeatures.forEach((darkFeature) => {
  darkFeature.addEventListener('click', function() {
    page.setAttribute('color-scheme', 'dark');
  });
});

blueFeatures.forEach((blueFeature) => {
  blueFeature.addEventListener('click', function() {
    page.setAttribute('color-scheme', 'blue');
  });
});

specialFeatures.forEach((specialFeature) => {
  specialFeature.addEventListener('click', function() {
    page.setAttribute('color-scheme', 'special');
  });
});
