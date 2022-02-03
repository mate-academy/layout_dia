'use strict';

const midColor = '#9d9d9d';
const transitionDuration = 300;

const link = document.querySelector('.link');

link.onclick = () => {
  link.animate([
    {
      color: '#fff', transform: 'scale(1)',
    },
    {
      color: midColor, transform: 'scale(0.95)',
    },
    {
      color: '#fff', transform: 'scale(1)',
    }],
  { duration: transitionDuration * 2 });
};

const burger = document
  .querySelector('.header__burger');
const burgerPartFirst = document
  .querySelector('.header__burger-part:first-child');
const burgerPartLast = document
  .querySelector('.header__burger-part:last-child');

burger.onclick = function() {
  burgerPartFirst.animate([
    { width: '100%' },
    { width: '60%' },
    { width: '100%' },
  ], { duration: transitionDuration * 2 });

  burgerPartLast.animate([
    { width: '100%' },
    { width: '40%' },
    { width: '100%' },
  ], { duration: transitionDuration * 2 });
};
