//  Swiper import
//  ***** Start

import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper.scss';

//  Swiper - End *****
//  ---------------------------------
//  Burger menu - add new classes
//  ***** Start

const burgerMenuIcon = document.querySelector('.menu--burger .menu__icon');
const burgerMenuList = document.querySelector('.menu__list--burger-list');
const burgerMenuItems = document.querySelectorAll(
  '.menu__list--burger-list .menu__item'
);
const headerNavActionsLink = document.querySelector(
  '.navigation-actions__link'
);
const mainPageBody = document.querySelector('.page__body');

burgerMenuEventListners();

function burgerMenuEventListners() {
  burgerMenuIcon.addEventListener('click', burgerMenuIconClick);

  burgerMenuItems.forEach(el =>
    el.addEventListener('click', burgerMenuItemsClick)
  );
}

function burgerMenuIconClick() {
  burgerMenuIcon.classList.toggle('menu__icon--is-active');
  burgerMenuList.classList.toggle('menu__list--is-open');
  mainPageBody.classList.toggle('page__body--with-menu');

  burgerMenuItems.forEach(el =>
    el.classList.toggle('menu__item--is-visible')
  );

  setTimeout(function() {
    headerNavActionsLink.classList
      .toggle('navigation-actions__link--is-hidden');
  }, 400);
}

function burgerMenuItemsClick() {
  if (burgerMenuList.classList.contains('menu__list--is-open')) {
    burgerMenuIcon.click();
  }
}

//  Burger menu - End *****
//  ---------------------------------
//  Experience section - multiply hover state for an image and a title
//  ***** Start

const experienceItems = document.querySelectorAll('.experience__item');

experienceItems.forEach(function(el) {
  el.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('experience__image')) {
      e.target.style.transform = 'scale(1.2)';
      el.querySelector('.experience__item-title').style.color = '#2060f6';
    }

    if (e.target.classList.contains('experience__item-title')) {
      e.target.style.color = '#2060f6';
      el.querySelector('.experience__image').style.transform = 'scale(1.2)';
    }
  });

  el.addEventListener('mouseout', function(e) {
    el.querySelector('.experience__image').style.transform = null;
    el.querySelector('.experience__item-title').style.color = null;
  });
});

//  Experience section - End *****
//  ---------------------------------
//  Services section - multiply hover state for a circle
//  ***** Start

const servicesModules = document.querySelectorAll('.services__module');

servicesModules.forEach(function(el) {
  el.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('services__link')
          || e.target.classList.contains('services__link-circle')) {
      el.querySelector('.services__link-circle').style.transform = 'scale(1.2)';
    }
  });

  el.addEventListener('mouseout', function(e) {
    el.querySelector('.services__link-circle').style.transform = null;
  });
});

//  Services section - End *****
//  ---------------------------------
//  Testimonials section - multiply hover state for an image
//  ***** Start

const testimonialsItems = document.querySelectorAll('.testimonials__item');

testimonialsItems.forEach(function(el) {
  el.addEventListener('mouseover', function(e) {
    el.querySelector('.testimonials__image-wrapper')
      .classList.add('testimonials__image-wrapper--is-hover');
  });

  el.addEventListener('mouseout', function(e) {
    el.querySelector('.testimonials__image-wrapper')
      .classList.remove('testimonials__image-wrapper--is-hover');
  });
});

//  Testimonials section - End *****
//  ---------------------------------
//  Swiper slider - initialize
//  ***** Start

/* eslint-disable no-unused-vars */
const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  grabCursor: true,
  speed: 900,
  loop: true,

  navigation: {
    nextEl: '.carousel__button.icon--arrow--right',
    prevEl: '.carousel__button.icon--arrow--left',
  },
});

//  Swiper slider - End *****
