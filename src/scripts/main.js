'use strict';

const hamburger = document.querySelector('.mobile__hamburger');
const navLinks = document.querySelector('.mobile__navigation');
const links = document.querySelectorAll('.navigation__item');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  links.forEach(link => {
    link.classList.toggle('fade');
  });
});
