'use strict';

const hamburger = document.querySelector('.mobile__hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  links.forEach(link => {
    link.classList.toggle('fade');
  });
});
