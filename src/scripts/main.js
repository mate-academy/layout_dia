'use strict';

const page = document.querySelector('.page');
const togglers = document.querySelectorAll('.menu__toggler');
const menu = document.querySelector('.menu__list-container');
const notabs = document.querySelectorAll('.notab *');
const noDefault = document.querySelector('.noDefault');

// slider section

function initSlider(sliderId) {
  const sliderBody = sliderId.querySelector('.slider__wrapper');
  const count = sliderBody.children.length;
  const leftButton = sliderId.querySelector('.slider__toggler-left');
  const rightButton = sliderId.querySelector('.slider__toggler-right');

  let currentPosition = 0;

  function moveTo(position) {
    currentPosition = position % count;

    if (currentPosition < 0) {
      currentPosition += count;
    }

    sliderBody.style.transform = `translateX(${-currentPosition * 100}%)`;
  }

  function moveNext() {
    moveTo(currentPosition + 1);
  }

  function movePrev() {
    moveTo(currentPosition - 1);
  }

  rightButton.addEventListener('click', moveNext);
  leftButton.addEventListener('click', movePrev);

  moveTo(currentPosition);

  return {
    moveTo: moveTo,
    moveNext: moveNext,
    movePrev: movePrev,
  };
}

const slider1 = initSlider(document.getElementById('slider1'));

setInterval(function() {
  slider1.moveNext();
}, 5000);

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
  setPageTheme(theme);
});
