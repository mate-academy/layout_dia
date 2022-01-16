'use strict';

const page = document.querySelector('.page');
const togglers = document.querySelectorAll('.menu__toggler');
const menu = document.querySelector('.menu__list-container');
const notabs = document.querySelectorAll('.notab *');
const noDefault = document.querySelector('.noDefault');

// swiper section
document.querySelectorAll('.swiper__button').forEach((button) => {
  let currentSwiperPosition = 0;
  const swiperItemsCount
    = document.querySelector('.swiper__wrapper').children.length;
  const SwiperWidth = (swiperItemsCount - 1) * 100;

  button.addEventListener('click', function() {
    if (button.classList.contains('swiper__toggler-left')) {
      currentSwiperPosition === 0
        ? (currentSwiperPosition -= SwiperWidth)
        : (currentSwiperPosition += 100);
    } else if (button.classList.contains('swiper__toggler-right')) {
      currentSwiperPosition === SwiperWidth * -1
        ? (currentSwiperPosition = 0)
        : (currentSwiperPosition -= 100);
    }

    document.querySelector(
      '.swiper__wrapper'
    ).style.transform = `translateX(${currentSwiperPosition}%)`;
  });
});

// preventing defaul action for form
noDefault.addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('message')[0].value = '';
});

// making anable to tab if menu is opened
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

// setting themes
const themes = ['dark', 'blue', 'special', 'squere'];

const setPageTheme = function(name) {
  const featureSelectors = document.querySelectorAll(`.feature-${name}`);

  featureSelectors.forEach((feature) => {
    feature.addEventListener('click', function() {
      page.setAttribute('color-scheme', `${name}`);
    });
  });
};

themes.forEach((theme) => {
  return setPageTheme(theme);
});
