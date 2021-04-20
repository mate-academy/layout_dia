'use strict';

const navigation = document.querySelector('#navigation');
const toggler = document.querySelector('#toggler');
const navLinks = document.querySelectorAll('.nav__link');

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
