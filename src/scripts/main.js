'use strict';

const dropdown = document.querySelector('.top-bar__dropdown');
const trigger = document.querySelector('.top-bar__menu');
const nav_list = document.querySelector('.nav--dropdown');

let timeoutId;

trigger.addEventListener('mouseenter', () => {

  dropdown.classList.add('dropdown--active');
  clearTimeout(timeoutId);
});

dropdown.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    dropdown.classList.remove('dropdown--active');
  }, 500);
});

nav_list.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
});

nav_list.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    dropdown.classList.remove('dropdown--active');
  }, 500);
});

const slider = document.querySelector('.slider');
const right = document.querySelector('.arrow--right');
const left = document.querySelector('.arrow--left');
let count = 0;

right.addEventListener('click', () => {
  if (count === 0) {
    slider.classList.add('slider--right');
    right.style.cursor = 'initial';
    right.style.opacity = 0.3;
    count++;
  } else if (count === -1) {
    slider.classList.remove('slider--left');
    left.style.opacity = 1;
    left.style.cursor = 'pointer';
    count++;
  } else {
    return;
  }
});

left.addEventListener('click', () => {
  if (count === 0) {
    slider.classList.add('slider--left');
    left.style.opacity = 0.3;
    left.style.cursor = 'initial';
    count--;
  } else if (count === 1) {
    slider.classList.remove('slider--right');
    right.style.cursor = 'pointer';
    right.style.opacity = 1;
    count--;
  } else {
    return;
  }
})
