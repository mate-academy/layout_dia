'use strict';

const burgerButton = document.querySelector('.header__burger');
const menuCross = document.querySelector('.mobile-menu__cross');
const mobileMenu = document.querySelector('.mobile-menu');
const navBar = document.querySelector('.header__nav-bar');
const learnMoreButton = document.querySelector('.header__button');
const links = document.querySelectorAll('.mobile-menu__link');
const applyButton = document.querySelector('.vision__button');
const form = document.querySelector('.footer__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

burgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--open');
});

applyButton.addEventListener('click', () => {
  window.scrollTo({
    top: 6500,
    behavior: 'smooth',
  });
});

learnMoreButton.addEventListener('click', () => {
  window.scrollTo({
    top: 800,
    behavior: 'smooth',
  });
});

menuCross.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu--open');
});

for (const link of links) {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--open');
  });
}

function scrollWindow() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80 && window.innerWidth <= 900) {
      navBar.style.boxShadow = '0px 2px 5px 0px rgba(0,0,0,0.75)';
    } else {
      navBar.style.boxShadow = '0px 2px 5px 0px rgba(0,0,0,0)';
    }
  });
}

scrollWindow();
