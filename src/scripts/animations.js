'use strict';

const colorGray = '#9d9d9d';
const colorBlue = '#2060f6ff';
const transitionDuration = 300;

const link = document.querySelector('.link');
const linkScaleDown = 0.985;

link.onclick = function() {
  this.animate([
    {
      color: '#fff',
      transform: 'scale(1)',
    },
    {
      color: colorGray,
      transform: `scale(${linkScaleDown})`,
    },
    {
      color: '#fff',
      transform: 'scale(1)',
    }],
  { duration: transitionDuration });
};

const burger = document
  .querySelector('.header__burger');
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

const button = document.querySelector('.button');
const buttonScaleDown = 0.985;

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
      transform: `scale(${buttonScaleDown})`,
    },
    {
      color: '#fff',
      background: colorBlue,
      transform: 'scale(1)',
    }],
  { duration: transitionDuration });
};

const arrowButtonLeft = document
  .querySelector('.slider__arrow--left');
const arrowButtonRight = document
  .querySelector('.slider__arrow--right');

arrowButtonLeft.onclick = function() {
  this.animate([
    { transform: 'scale(1)' },
    { transform: `scale(${linkScaleDown})` },
    { transform: 'scale(1)' }],
  { duration: transitionDuration });
};

arrowButtonRight.onclick = function() {
  this.animate([
    { transform: 'scale(1)' },
    { transform: `scale(${linkScaleDown})` },
    { transform: 'scale(1)' }],
  { duration: transitionDuration });
};
