'use strict';

const colorGray = '#9d9d9d';
const transitionDuration = 300;
const scaleDown = 0.985;

function transformOnClick(item, rule, states, duration) {
  item.onclick = function() {
    this.animate([
      { transform: `${rule}(${states[0]})` },
      { transform: `${rule}(${states[1]})` },
      { transform: `${rule}(${states[2]})` }],
    { duration: duration });
  };
}

function applyToAll(items, func, midVal) {
  for (const item of items) {
    func(item, 'scale', [1, midVal, 1], transitionDuration);
  }
}

function animateButton(button) {
  const colorBlue = '#2060f6ff';

  button.onclick = function() {
    this.animate([
      {
        color: '#fff',
        background: colorBlue,
        transform: 'scale(1)',
      },
      {
        border: 'none',
        color: colorBlue,
        background: '#fff',
        transform: `scale(${scaleDown})`,
      },
      {
        color: '#fff',
        background: colorBlue,
        transform: 'scale(1)',
      }],
    { duration: transitionDuration });
  };
}

const link = document.querySelector('.link');

link.onclick = function() {
  this.animate([
    {
      color: '#fff',
      transform: 'scale(1)',
    },
    {
      color: colorGray,
      transform: `scale(${scaleDown})`,
    },
    {
      color: '#fff',
      transform: 'scale(1)',
    }],
  { duration: transitionDuration });
};

const burger = document.querySelector('.header__burger');
const burgerPartFirst = document
  .querySelector('.header__burger-part:first-child');
const burgerPartLast = document
  .querySelector('.header__burger-part:last-child');

burger.onclick = () => {
  burgerPartFirst.animate([
    { width: '100%' },
    { width: '60%' },
    { width: '100%' },
  ], { duration: transitionDuration });

  burgerPartLast.animate([
    { width: '100%' },
    { width: '40%' },
    { width: '100%' },
  ], { duration: transitionDuration });
};

const headerButton = document.querySelector('.button');

animateButton(headerButton);

const cross = document.querySelector('.icon--cross');

transformOnClick(cross,
  'rotate', [0, '1turn', '2turn'],
  transitionDuration);

const arrowButtons = document.querySelectorAll('.slider__arrow');

applyToAll(arrowButtons,
  transformOnClick, scaleDown);

const learnButtons = document.querySelectorAll('.card__button');

applyToAll(learnButtons,
  transformOnClick, scaleDown);
