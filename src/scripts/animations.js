'use strict';

const colorBlue = '#2060f6ff';
const transitionDuration = 300;
const scaleDown = 0.985;

function transformOnClick(item, rule, states, duration) {
  item.addEventListener('click', function() {
    this.animate([
      { transform: `${rule}(${states[0]})` },
      { transform: `${rule}(${states[1]})` },
      { transform: `${rule}(${states[2]})` }],
    { duration: duration });
  });
}

function applyToAll(items, func, midVal) {
  for (const item of items) {
    func(item, 'scale', [1, midVal, 1], transitionDuration);
  }
}

function animateButton(button) {
  button.addEventListener('click', function() {
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
  });
}

const burger = document.querySelector('.header__burger');
const burgerPartFirst = document
  .querySelector('.header__burger-part:first-child');
const burgerPartLast = document
  .querySelector('.header__burger-part:last-child');

burger.addEventListener('click', function() {
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
});

const blueButtons = document.querySelectorAll('.button');
const crossIcon = document.querySelector('.icon--cross');
const arrowButtons = document.querySelectorAll('.slider__arrow');
const learnButtons = document.querySelectorAll('.card__button');

animateButton(blueButtons[0]);
animateButton(blueButtons[1]);

transformOnClick(crossIcon,
  'rotate', [0, '1turn', '2turn'],
  transitionDuration);

applyToAll(arrowButtons, transformOnClick, scaleDown);
applyToAll(learnButtons, transformOnClick, scaleDown);

const instButton = document.querySelector('.contact-us__instagram');

instButton.addEventListener('mouseover', function() {
  this.animate([
    { fill: '#fff' },
    { fill: '#515bd4' },
    { fill: '#8134af' },
    { fill: '#feda77' },
    { fill: '#f58529' },
    { fill: '#dd2a7d' },
  ],
  { duration: transitionDuration * 3 });
});
