'use strict';

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link, .footer__link');
const form = document.querySelector('#contact-form');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');

    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (nav) {
      nav.classList.remove('nav--open');
    }

    if (menuButton) {
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}