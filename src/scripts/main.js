'use strict';

const images = document.querySelector('.header__slider-images');
const prev = document.querySelector('.header__slider-button--left');
const next = document.querySelector('.header__slider-button--right');

let position = 0;

next.addEventListener('click', function() {
  const count = images.children.length;

  position += 1;

  if (position >= count) {
    position = 0;
  }

  images.style.transform = `translateX(${-position * 100}%)`;
});

prev.addEventListener('click', function() {
  const count = images.children.length;

  position -= 1;

  if (position < 0) {
    position = count - 1;
  }

  images.style.transform = `translateX(${-position * 100}%)`;
});

const menuOpen = document.querySelector('.header__toggler');
const menu = document.querySelector('.header__nav-container');

menuOpen.addEventListener('click', function() {
  menu.classList.toggle('header__nav-container--is-opened');
});
