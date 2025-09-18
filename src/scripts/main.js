'use strict';

// Анімація бургер-меню
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.header__burger');
  const header = document.querySelector('.header');
  const mobileMenu = document.querySelector('.header__mobile-sidebar');
  const menuLinks = document.querySelectorAll('.header__burger-nav-item a');

  // Відкривання/закривання меню при кліку на бургер
  burger.addEventListener('click', function () {
    header.classList.toggle('is-open');
  });

  // Закривання меню при кліку на посилання
  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      header.classList.remove('is-open');
    });
  });

  // Закривання меню при кліку поза меню
  mobileMenu.addEventListener('click', function (e) {
    if (e.target === mobileMenu) {
      header.classList.remove('is-open');
    }
  });

  // Закривання меню при натисканні Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      header.classList.remove('is-open');
    }
  });
});

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,

  navigation: {
    nextEl: '.slider__navigation--next',
    prevEl: '.slider__navigation--prev',
  },
});
