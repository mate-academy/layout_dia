'use strict';

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', function (event) {
  event.preventDefault();
  nav.classList.add('nav--open');
});

navClose.addEventListener('click', function () {
  nav.classList.remove('nav--open');
});

nav.querySelectorAll('.nav__link').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('nav--open');
  });
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();

    return;
  }

  contactForm.reset();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
