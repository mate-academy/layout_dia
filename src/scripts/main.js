'use strict';

const navLink = document.querySelector('a[href="#navigation"]');
const body = document.documentElement;

navLink.addEventListener('click', () => {
  body.classList.add('no-scroll');
});

const links = document.querySelectorAll('.header__cover--top--wrap--nav--links');
links?.forEach(element => {
  element.addEventListener('click', function() {
    body.classList.remove('no-scroll');
  });
});
