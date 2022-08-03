// eslint-disable-next-line strict
'use strict';

import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Autoplay],

  loop: true,

  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },

  autoplay: {
    delay: 3000,
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});
