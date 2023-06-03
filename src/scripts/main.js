'use strict';

// eslint-disable-next-line no-undef
const slider = tns({
  container: '.carousel__my-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayTimeout: 8000,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: 'bottom',
});

document.querySelector('.carousel__prev').addEventListener('click', function() {
  slider.goTo('prev');
});

document.querySelector('.carousel__next').addEventListener('click', function() {
  slider.goTo('next');
});

const headerButton = document.querySelector('.button--header-button');
const ctaBlockButton = document.querySelector('.button--cta-block-button');
const aboutUs = document.querySelector('.who-we-are');
const contactUs = document.getElementById('contact-us');
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('.nav__link');
const headerLink = document.querySelector('.header__link');
const servicesButtons = document.querySelectorAll('.services__button');
const headerLogoLink = document.querySelector('.header__logo-link');
const burgerMenu = document.querySelector('.header__burger-menu');
const footerLogo = document.querySelector('.footer__logo');
const body = document.getElementById('home');

headerButton.addEventListener('click', () => {
  aboutUs.scrollIntoView({ behavior: 'smooth' });
});

footerLogo.addEventListener('click', () => {
  body.scrollIntoView({ behavior: 'smooth' });
});

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  body.classList.toggle('block-scroll');
  burgerMenu.classList.toggle('header__burger-menu--active');
});

headerLink.addEventListener('click', () => {
  if (nav.classList.contains('nav--active')) {
    nav.classList.toggle('nav--active');
    body.classList.toggle('block-scroll');
    burgerMenu.classList.toggle('header__burger-menu--active');
  }
});

headerLogoLink.addEventListener('click', () => {
  if (nav.classList.contains('nav--active')) {
    nav.classList.toggle('nav--active');
    body.classList.toggle('block-scroll');
    burgerMenu.classList.toggle('header__burger-menu--active');
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (burgerMenu.offsetWidth > 0) {
      body.classList.toggle('block-scroll');
      nav.classList.toggle('nav--active');
      burgerMenu.classList.toggle('header__burger-menu--active');
    }
  });
});

servicesButtons.forEach((button) => {
  button.addEventListener('click', () => {
    contactUs.scrollIntoView({ behavior: 'smooth' });
  });
});

ctaBlockButton.addEventListener('click', () => {
  contactUs.scrollIntoView({ behavior: 'smooth' });
});
