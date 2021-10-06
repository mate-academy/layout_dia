'use strict';

const hamburger = document.querySelector('.header__burger');
const navigation = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('header__nav--active');
  hamburger.classList.toggle('header__burger--active');
});
