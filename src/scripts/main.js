import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
'use strict';

const burger = document.querySelector('.header__burger');
const closeBtn = document.querySelector('.menu__close');
const menu = document.querySelector('.page__menu');
const menuLinks = document.querySelectorAll('.menu__nav .nav__item');

const closeMenu = (e) => {
  if (e) e.preventDefault();
  menu.classList.remove('page__menu--is-open');
  document.body.style.overflow = '';
};

burger.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('page__menu--is-open');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    menu.classList.remove('page__menu--is-open');
    document.body.style.overflow = '';
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    menu.classList.remove('page__menu--is-open');
    document.body.style.overflow = '';
  }
});

const swiper = new Swiper('.slider__swiper', {
  loop: true,
  initialSlide: 0,
  navigation: {
    nextEl: '.slider__navigation--next',
    prevEl: '.slider__navigation--prev',
  },
});

const siteHeader = document.querySelector('.header');
const triggerButton = document.querySelector('.home__button--learn-more');



let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('header--hidden');
  } else {
    header.classList.remove('header--hidden');
  }

  lastScroll = currentScroll;
});

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
});

revealItems.forEach(item => {
  revealObserver.observe(item);
});

const contactForm = document.querySelector('.contact-us__form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    contactForm.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}



