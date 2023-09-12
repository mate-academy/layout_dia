'use strict';

const btnLeft = document.querySelector('.slider__button--left');
const btnRight = document.querySelector('.slider__button--right');

const image = document.querySelector('.slider');

const images = [
  'url("https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-'
  + '4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=form'
  + 'at&fit=crop&w=2670&q=80")',
  'url("https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-'
  + ''
  + '4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=form'
  + 'at&fit=crop&w=2416&q=80")',
  'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-'
  + ''
  + '4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=form'
  + 'at&fit=crop&w=2670&q=80")',
  'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-'
  + ''
  + '4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=form'
  + 'at&fit=crop&w=2669&q=80")',
];

image.style.backgroundImage = images[images.length - 1];

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

btnLeft.addEventListener('click', e => {
  images.push(images.shift());
  image.style.backgroundImage = images[images.length - 1];
});

btnRight.addEventListener('click', e => {
  images.unshift(images.pop());
  image.style.backgroundImage = images[images.length - 1];
});
