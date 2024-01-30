'use strict';

const PAGE = document.querySelector('.page');
const MENU = document.querySelector('#menu');
const NAV_TOP = document.querySelector('#nav-top-bar');
const HEADER = document.querySelector('#header');
const FOOTER = document.querySelector('#footer');
const BUTTONS = document.querySelectorAll('.button');
const BUTTONS_IN_CARD = document.querySelectorAll('.button--place--card');
const CARD_NUMBER = document.querySelectorAll('.card__number');
const CARD_BEFORE = document.querySelectorAll('.card__img-container--before');
const CARD_AFTER = document.querySelectorAll('.card__img-container--after');
const IMAGE_SLIDER = document.querySelector('#image-slider');
const IMAGE_IN_SLIDER = document.querySelector('.slider__image');

const BUTTON_HEADER = document.querySelector('#button-header');
const BUTTON_ASIDE = document.querySelector('.button--aside');
const ASIDE = document.querySelector('#aside-container');
const CARDS = document.querySelectorAll('.card--services');

const BUTTON_SLIDER_LEFT = document.querySelector('#button-slider-left');
const BUTTON_SLIDER_RIGHT = document.querySelector('#button-slider-right');
const BUTTON_CHANGE_COLOR = document.querySelector('#change-color');

const SLIDER = document.querySelector('#slider');

let transform = 0;

PAGE.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.classList.contains('top-bar__menu--show')
    && NAV_TOP.classList.contains('nav--top-bar--show')) {
    MENU.classList.add('top-bar__menu--hide');
    NAV_TOP.classList.add('nav--top-bar--hide');
    MENU.classList.remove('top-bar__menu--show');
    NAV_TOP.classList.remove('nav--top-bar--show');

    setTimeout(() => {
      MENU.classList.remove('top-bar__menu--hide');
      NAV_TOP.classList.remove('nav--top-bar--hide');
    }, 1000);
  }

  if (target.parentNode.classList.contains('card_links')) {
    PAGE.classList.add('page--overflow-hidden');
    // eslint-disable-next-line
    ASIDE.style.top = screenY;
    ASIDE.classList.add('aside--show');

    const div = document.createElement('div');

    div.innerHTML = target.parentNode.parentNode.innerHTML;
    div.classList.add('card--aside');
    div.children[3].children[1].innerHTML = 'Send us a message';
    div.children[2].classList.add('card__aside--show');
    ASIDE.children[1].append(div);
  }

  if (target.parentNode.parentNode.classList.contains('card--aside')) {
    ASIDE.children[1].innerHTML = '';
    ASIDE.classList.remove('aside--show');
    PAGE.classList.remove('page--overflow-hidden');
    window.location.hash = 'send-message';

    setTimeout(() => {
      window.location.hash = 'send-message/';
    }, 100);
  }
});

MENU.addEventListener('click', () => {
  MENU.classList.add('top-bar__menu--show');
  NAV_TOP.classList.add('nav--top-bar--show');
});

BUTTON_HEADER.addEventListener('click', () => {
  PAGE.classList.add('page--overflow-hidden');
  // eslint-disable-next-line
  ASIDE.style.top = screenY;
  ASIDE.classList.add('aside--show');

  for (const card of CARDS) {
    const div = document.createElement('div');

    div.innerHTML = card.innerHTML;
    div.classList.add('card--aside');
    div.children[3].children[1].innerHTML = 'Send us a message';
    div.children[2].classList.add('card__aside--show');
    ASIDE.children[1].append(div);
  }
});

BUTTON_ASIDE.addEventListener('click', () => {
  ASIDE.children[1].innerHTML = '';
  ASIDE.classList.remove('aside--show');
  PAGE.classList.remove('page--overflow-hidden');
});

BUTTON_SLIDER_RIGHT.addEventListener('click', () => {
  if (transform > -66) {
    transform -= 33.33;
    SLIDER.style.transform = `translateX(${transform}%)`;
  }
});

BUTTON_SLIDER_LEFT.addEventListener('click', () => {
  if (transform < 0) {
    transform += 33.33;
    SLIDER.style.transform = `translateX(${transform}%)`;
  }
});

let counter = 0;

BUTTON_CHANGE_COLOR.addEventListener('click', () => {
  if (counter % 2 === 0) {
    BUTTON_CHANGE_COLOR.classList.add('top-bar__color-changer--to-black');
    HEADER.classList.add('color-header');
    FOOTER.classList.add('color-footer');
    IMAGE_SLIDER.classList.add('color-image');
    IMAGE_IN_SLIDER.style.borderRadius = '0';

    for (const button of BUTTONS) {
      button.classList.add('button-color');
    }

    for (let i = 0; i < BUTTONS_IN_CARD.length; i++) {
      BUTTONS_IN_CARD[i].classList.add(`button-color-${i + 1}`);
      CARD_NUMBER[i].classList.add(`card-color-${i + 1}`);

      if (i < CARD_BEFORE.length) {
        CARD_BEFORE[i].classList.add(`before-color-${i + 1}`);
        CARD_AFTER[i].classList.add(`after-color-${i + 1}`);
      }
    }
  } else {
    BUTTON_CHANGE_COLOR.classList.remove('top-bar__color-changer--to-black');
    HEADER.classList.remove('color-header');
    FOOTER.classList.remove('color-footer');
    IMAGE_SLIDER.classList.remove('color-image');

    for (const button of BUTTONS) {
      button.classList.remove('button-color');
    }

    for (let i = 0; i < BUTTONS_IN_CARD.length; i++) {
      BUTTONS_IN_CARD[i].classList.remove(`button-color-${i + 1}`);
      CARD_NUMBER[i].classList.remove(`card-color-${i + 1}`);

      if (i < CARD_BEFORE.length) {
        CARD_BEFORE[i].classList.remove(`before-color-${i + 1}`);
        CARD_AFTER[i].classList.remove(`after-color-${i + 1}`);
      }
    }
  }

  counter++;
});
