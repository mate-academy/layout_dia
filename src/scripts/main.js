'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('nav__hamburger--active');
    nav.classList.toggle('nav--active');
  });
});
