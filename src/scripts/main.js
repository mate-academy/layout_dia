'use strict';

const navigation = document.querySelector('#navigation');
const toggler = document.querySelector('#toggler');
const navLinks = document.querySelectorAll('.nav__link');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const images = document.querySelectorAll('.slider__photo');

let counter = 0;

toggler.addEventListener('click', () => {
  navigation.classList.toggle('nav__nav-bar--small-screen-active');
  toggler.classList.toggle('nav__burger-icon--close');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('nav__nav-bar--small-screen-active');
    toggler.classList.toggle('nav__burger-icon--close');
  });
});

next.addEventListener('click', () => {
  images[counter].classList.remove('slider__photo--active');

  if (counter >= 2) {
    counter = -1;
  }
  counter++;

  images[counter].classList.add('slider__photo--active');
});

prev.addEventListener('click', () => {
  images[counter].classList.remove('slider__photo--active');

  if (counter <= 0) {
    counter = 2;
  }
  counter--;

  images[counter].classList.add('slider__photo--active');
});
